import { LOGIN_SUCCESS, LOGOUT_SUCCESS, REHYDRATE } from '../types/auth'

export const loginSuccess = () => ({ type: LOGIN_SUCCESS })

export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS })

export const rehydrate = ({ isAuthenticated }) => ({
  type: REHYDRATE,
  payload: { isAuthenticated },
})
