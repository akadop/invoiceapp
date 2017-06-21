import { ApolloClient, createNetworkInterface } from 'react-apollo'

import Cookies from 'js-cookie'
import fetch from 'isomorphic-fetch'

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

export const networkInterface = uri => {
  const netInterface = createNetworkInterface({
    uri,
    opts: { credentials: 'same-origin' },
  })

  netInterface.use([
    {
      applyMiddleware(req, next) {
        if (!req.options.headers) {
          req.options.headers = {}
        }

        const token = Cookies.get('userToken')

        if (Boolean(token)) {
          // bearer token will be passed here.
          req.options.headers.authorization = `Bearer ${token}`
        }

        next()
      },
    },
  ])

  return netInterface
}

export const init = (headers, initialState) => {
  return new ApolloClient({
    initialState,
    // Disables forceFetch on the server (so queries are only run once)
    ssrMode: !process.browser,
    dataIdFromObject: data => data.id || '',
    networkInterface: networkInterface(API_URL),
    queryDeduplication: true,
  })
}

export const initClient = (headers, initialState = {}) => {
  if (!process.browser) {
    return init(headers, initialState)
  }

  if (!apolloClient) {
    apolloClient = init(headers, initialState)
  }

  return apolloClient
}
