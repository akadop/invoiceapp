import { ApolloClient, createNetworkInterface } from 'react-apollo'

import cookie from 'react-cookie'

let apolloClient = null

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
    ssrMode: !process.browser,
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
