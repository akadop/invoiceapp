import 'isomorphic-fetch'

import { ApolloProvider, getDataFromTree } from 'react-apollo'
import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ReduxToastr from 'react-redux-toastr'
import cookie from 'react-cookie'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { initClient } from '../core/initClient'
import { initStore } from '../core/initStore'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { rehydrate } from '../actions/auth'
import theme from './theme'

// Make sure react-tap-event-plugin only gets injected once
// Needed for material-ui
if (!process.tapEventInjected) {
  injectTapEventPlugin()
  process.tapEventInjected = true
}
/* 
 +A hoc is a higher order component. 
 +The basis of react is to make it as modular as possible, from button components to the giant containers.
 +A hoc is a pure function that will always return the same value if the same input is used. 
 +Because of this, we can pass our little components with no information into this apollo-client connected component, 
 +effectively making anything passing through it data-connected. 
 +thus, we make stateless, informationless base components and pass it into these higher order components.
 +*/

export default ComposedComponent =>
  class extends Component {
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

      // Because store is cached, authentication state need to be update before rendering.
      // When we redirect people and disconnect on other tabs, we need to rehydrate the state.
      // We don't want to use logout() in guards HoC to prevent notification and any side effect.

      store.dispatch(
        rehydrate({ isAuthenticated: Boolean(cookie.load('__AUTH_TOKEN__')) })
      )
      const state = store.getState()

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

      return {
        initialState: {
          ...state,
          apollo: {
            data: client.getInitialState().data,
          },
        },
        headers,
        userAgent,
        ...props,
      }
    }

    // Initiate the stores and their props.

    constructor(props) {
      super(props)

      this.client = initClient(this.props.headers, this.props.initialState)
      this.store = initStore(this.client, this.props.initialState)
    }

    render() {
      return (
        <ApolloProvider client={this.client} store={this.store}>
          <MuiThemeProvider
            muiTheme={getMuiTheme(theme, { userAgent: this.props.userAgent })}
          >
            <div>
              <ComposedComponent {...this.props} />
              <ReduxToastr
                timeOut={4000}
                newestOnTop={false}
                preventDuplicates={true}
                position="top-right"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar
              />
            </div>
          </MuiThemeProvider>
        </ApolloProvider>
      )
    }
  }
