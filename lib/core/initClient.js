import { ApolloClient, createNetworkInterface } from 'react-apollo'

import cookie from 'react-cookie'

// Apollo Client is a graphQL client that let's us call the graphQl server exposed on the lamda backend.

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

export const networkInterface = uri => {
  const nInterface = createNetworkInterface({
    uri,
    opts: { credentials: 'same-origin' },
  })

  nInterface.use([
    {
      applyMiddleware(req, next) {
        if (!req.options.headers) {
          req.options.headers = {}
        }

        const token = cookie.load('__AUTH_TOKEN__')

        if (Boolean(token)) {
          // bearer token will be passed here.
          req.options.headers.authorization = `Bearer ${token}`
        }

        next()
      },
    },
  ])

  return nInterface
}

export const init = (headers, initialState) => {
  return new ApolloClient({
    initialState,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    dataIdFromObject: data => data.id || null,
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
