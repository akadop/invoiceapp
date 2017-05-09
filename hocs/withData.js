import 'isomorphic-fetch'

import { ApolloProvider, getDataFromTree } from 'react-apollo'
import React, { Component } from 'react'

import { initClient } from '../lib/initClient'
import { initStore } from '../lib/initStore'

/* 
A hoc is a higher order component. 
The basis of react is to make it as modular as possible, from button components to the giant containers.
A hoc is a pure function that will always return the same value if the same input is used. 
Because of this, we can pass our little components with no information into this apollo-client connected component, 
effectively making anything passing through it data-connected. 
thus, we make stateless, informationless base components and pass it into these higher order components.
*/

export default ComposedComponent =>
  class WithData extends Component {
    static async getInitialProps(ctx) {
      const headers = ctx.req ? ctx.req.headers : {}
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
            <ComposedComponent {...props} />
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
          <ComposedComponent {...this.props} />
        </ApolloProvider>
      )
    }
  }
