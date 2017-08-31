import { LOGIN_SUCCESS, LOGOUT_SUCCESS, REHYDRATE } from '../actions/auth'

export const initialState = {
  isAuthenticated: false,
  userToken: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        userToken: payload.userToken
      }

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false
      }

    case REHYDRATE:
      return {
        ...state,
        isAuthenticated: payload.isAuthenticated
      }

    default:
      return state
  }
}
