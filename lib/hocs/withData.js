import 'isomorphic-fetch'
import '../util/swInstall'

import { ApolloProvider, getDataFromTree } from 'react-apollo'

import { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ReduxToastr from 'react-redux-toastr'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { initClient } from '../core/initClient'
import { initStore } from '../core/initStore'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { loadUserToken } from '../util/cookieUtils'
import { rehydrate } from '../actions/auth'
import theme from '../util/theme'

// Make sure react-tap-event-plugin only gets injected once -- needed for material-ui
if (!process.tapEventInjected) {
  injectTapEventPlugin()
  process.tapEventInjected = true
}

export default ComposedComponent =>
  class extends Component {
    static displayName = `WithData(${ComposedComponent.displayName})`

    static async getInitialProps(ctx) {
      const headers = ctx.req ? ctx.req.headers : {}

      const userAgent = ctx.req
        ? ctx.req.headers['user-agent']
        : navigator.userAgent

      const client = initClient(headers)
      const store = initStore(client, client.initialState)

      const props = {
        url: {
          query: ctx.query,
          pathname: ctx.pathname
        },
        ...(await (Component.getInitialProps
          ? Component.getInitialProps(ctx)
          : {}))
      }

      // Because store is cached, authentication state needs to be updated before rendering.
      if (process.browser) {
        store.dispatch(
          rehydrate({
            isAuthenticated: Boolean(loadUserToken())
          })
        )
      }

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
            data: client.getInitialState().data
          }
        },
        headers,
        userAgent,
        ...props
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
            muiTheme={getMuiTheme(theme, {
              userAgent: this.props.userAgent
            })}
          >
            <div className="mainApp">
              <ComposedComponent {...this.props} />
              <ReduxToastr
                timeOut={4000}
                newestOnTop={false}
                preventDuplicates={true}
                position="bottom-right"
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
