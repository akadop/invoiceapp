import { applyMiddleware, compose } from 'redux'

import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

export default client => {
  const predicate = () =>
    process.env.NODE_ENV === 'development' && process.browser
  const logger = createLogger({ predicate })
  const middleware = applyMiddleware(
    client.middleware(),
    thunk.withExtraArgument(client),
    logger
  )

  if (process.browser && window.devToolsExtension) {
    return compose(middleware, window.devToolsExtension())
  }

  return middleware
}

// this middleware allows the use of Redux tools in Chromes developer mode. Very useful
