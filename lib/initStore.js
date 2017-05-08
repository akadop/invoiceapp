import createMiddleware from './middleware'
import { createStore } from 'redux'
import getReducer from './reducer'

// redux will maintain the component states after a change in browser
// although not needed at this stage I think it's good to have it set for the future

let reduxStore = null

export const initStore = (client, initialState) => {
	let store
	if (!process.browser || !reduxStore) {
		const middleware = createMiddleware(client.middleware())
		store = createStore(getReducer(client), initialState, middleware)
		if (!process.browser) {
			return store
		}
		reduxStore = store
	}
	return reduxStore
}
