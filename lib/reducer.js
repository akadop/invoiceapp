import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import nav from '../reducers/nav'

export default function getReducer(client) {
  return combineReducers({
    apollo: client.reducer(),
    form: formReducer,
    nav,
  })
}
