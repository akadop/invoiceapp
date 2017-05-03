import { applyMiddleware, compose } from 'redux'

// this middleware allows the use of Redux tools in Chromes developer mode. Very useful

export default function createMiddleware(clientMiddleware) {
  const middleware = applyMiddleware(clientMiddleware)
  if (process.browser && window.devToolsExtension) {
    return compose(middleware, window.devToolsExtension())
  }
  return middleware
}
