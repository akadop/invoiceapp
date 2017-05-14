import auth from './auth'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import ui from './ui'

// this is the root reducer. we take all reducers and combine them into one.
// the apollo client has built in state management, it is only concerned with the data.
// the combineReducers api from redux will let us merge the UI and data reducers.
// nav reducer lets the app automatically shut the menu if on mobile.

export default function getReducer(client) {
  return combineReducers({
    auth,
    ui,
    form: formReducer,
    toastr: toastrReducer,
    apollo: client.reducer(),
  })
}
