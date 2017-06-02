import createMiddleware from './middleware'
import { createStore } from 'redux'
import getReducer from '../reducers/index'

// redux will maintain the component states after a change in browser

let reduxStore = null // Get the Redux DevTools extension and fallback to a no-op function

export const initStore = (client, initialState) => {
  let store
  if (!process.browser || !reduxStore) {
    const middleware = createMiddleware(client)

    store = createStore(getReducer(client), initialState, middleware)

    if (!process.browser) {
      return store
    }

    reduxStore = store
  }

  return reduxStore
}
