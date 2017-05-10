import { LOGIN_SUCCESS, LOGOUT_SUCCESS, REHYDRATE } from '../actions/auth'

import cookie from 'react-cookie'

export const initialState = {
  isAuthenticated: Boolean(cookie.load('__AUTH_TOKEN__')),
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      }

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      }

    case REHYDRATE:
      return {
        ...state,
        isAuthenticated: payload.isAuthenticated,
      }

    default:
      return state
  }
}
