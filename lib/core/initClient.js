import { ApolloClient, createNetworkInterface } from 'react-apollo'

import Cookies from 'js-cookie'

// Apollo Client is a graphQL client that let's us call the graphQl server exposed on the lamda backend.

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)

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
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
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
