import { applyMiddleware, compose } from 'redux'

import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

// chrome dev middleware

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
