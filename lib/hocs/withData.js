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

// Inject only once and prevent errors for Material-ui tap event plugin.
try {
  injectTapEventPlugin()
} catch (err) {}

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
                position="bottom-left"
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
