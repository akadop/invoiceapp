import { LOGIN_SUCCESS, LOGOUT_SUCCESS, REHYDRATE } from '../types/auth'

export const loginSuccess = ({ userToken, isAuthenticated }) => ({
  type: LOGIN_SUCCESS,
  payload: { userToken, isAuthenticated }
})

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
})

export const rehydrate = ({ isAuthenticated }) => ({
  type: REHYDRATE,
  payload: { isAuthenticated }
})
