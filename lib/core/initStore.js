import createMiddleware from './middleware'
import { createStore } from 'redux'
import getReducer from '../reducers/index'

// import all reducers that were combined into one reducer (root reducer)

// redux will maintain the component states after a change in browser

let reduxStore = null

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
