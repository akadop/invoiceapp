import auth from './auth'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import ui from './ui'

// root reducer

export default function getReducer(client) {
  return combineReducers({
    auth,
    ui,
    form: formReducer,
    toastr: toastrReducer,
    apollo: client.reducer()
  })
}
