import 'isomorphic-fetch'

import { ApolloProvider, getDataFromTree } from 'react-apollo'
import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { initClient } from '../lib/initClient'
import { initStore } from '../lib/initStore'
import injectTapEventPlugin from 'react-tap-event-plugin'
import theme from './theme'

/* 
A hoc is a higher order component. 
The basis of react is to make it as modular as possible, from button components to the giant containers.
A hoc is a pure function that will always return the same value if the same input is used. 
Because of this, we can pass our little components with no information into this apollo-client connected component, 
effectively making anything passing through it data-connected. 
thus, we make stateless, informationless base components and pass it into these higher order components.
*/

// Inject only once and prevent errors for Material-ui tap event plugin.

try {
  injectTapEventPlugin()
} catch (err) {}

export default ComposedComponent =>
  class WithData extends Component {
    static async getInitialProps(ctx) {
      const headers = ctx.req ? ctx.req.headers : {}
      const userAgent = ctx.req
        ? ctx.req.headers['user-agent']
        : navigator.userAgent
      const client = initClient(headers)
      const store = initStore(client, client.initialState)

      const props = {
        url: { query: ctx.query, pathname: ctx.pathname },
        ...(await (Component.getInitialProps
          ? Component.getInitialProps(ctx)
          : {})),
      }

      // pass the work onto the browser after the initial server render.

      if (!process.browser) {
        const app = (
          <ApolloProvider client={client} store={store}>
            <MuiThemeProvider muiTheme={getMuiTheme(theme, { userAgent })}>
              <ComposedComponent {...props} />
            </MuiThemeProvider>
          </ApolloProvider>
        )
        await getDataFromTree(app)
      }

      const state = store.getState()

      return {
        initialState: {
          ...state,
          apollo: {
            data: client.getInitialState().data,
          },
        },
        userAgent,
        headers,
        ...props,
      }
    }

    // Initiate the stores and their props.
    constructor(props) {
      super(props)
      this.client = initClient(this.props.headers, this.props.initialState)
      this.store = initStore(this.client, this.props.initialState)
    }

    // Return stores and wrap the app with a data wrapper.

    render() {
      return (
        <ApolloProvider client={this.client} store={this.store}>
          <MuiThemeProvider
            muiTheme={getMuiTheme(theme, { userAgent: this.props.userAgent })}
          >
            <ComposedComponent {...this.props} />
          </MuiThemeProvider>
        </ApolloProvider>
      )
    }
  }

/**<ReduxToastr
              timeOut={4000}
              newestOnTop={false}
              preventDuplicates={true}
              position="bottom-left"
              transitionIn="fadeIn"
              transitionOut="fadeOut"
              progressBar
            /> */
