import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

// the apollo client has built in state management, it is only concerned with the data.
// the combineReducers api from redux will let us merge the UI and data reducers.
// nav reducer lets the app automatically shut the menu if on mobile.

export default function getReducer(client) {
  return combineReducers({
    form: formReducer,
    toastr: toastrReducer,
    apollo: client.reducer(),
  })
}
