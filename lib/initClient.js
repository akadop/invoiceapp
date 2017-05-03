import { ApolloClient, createNetworkInterface } from 'react-apollo'

// Apollo Client is a graphQL client that let's us call the graphQl server exposed on the lamda backend.

let apolloClient = null

function _initClient(headers, initialState) {
  return new ApolloClient({
    initialState,
    ssrMode: !process.browser,
    dataIdFromObject: result => result.id || null,
    networkInterface: createNetworkInterface({
      uri: 'https://api.graph.cool/simple/v1/cj1qw74umsgkl0127m6uk21x9',
      opts: {
        credentials: 'same-origin',
        // bearer token can be passed here if deemed necessary.
      },
    }),
  })
}

export const initClient = (headers, initialState = {}) => {
  if (!process.browser) {
    return _initClient(headers, initialState)
  }
  if (!apolloClient) {
    apolloClient = _initClient(headers, initialState)
  }
  return apolloClient
}
