import { loginSuccess, logoutSuccess } from '../actions/auth'
import { removeUserToken, saveUserToken } from '../util/cookieUtils'
import { startLoader, stopLoader } from '../actions/ui'

import Router from 'next/router'
import signinUser from '../mutations/signinUser'
import { toastr } from 'react-redux-toastr'

export const login = () => async (dispatch, getState, client) => {
  const { authForm } = getState().form

  const { values } = authForm

  if (!values) {
    return toastr.error('Login', 'Please complete all fields.')
  }

  try {
    const { email, password } = values

    // start loading animation when user hits submit.
    dispatch(startLoader())

    // now sign in.
    const signinUserResponse = await client.mutate({
      mutation: signinUser,
      variables: { email, password },
    })

    // if successful, store cookie with js-cookie
    dispatch(loginSuccess())
    setTimeout(() => dispatch(stopLoader()), 500)

    const userToken = signinUserResponse.data.signinUser.token

    saveUserToken(userToken, { path: '/' })

    toastr.success('Login', 'You have successfully logged in.')

    Router.push('/')
  } catch (err) {
    setTimeout(() => dispatch(stopLoader()), 500)

    toastr.error(
      'Login',
      'Authentication error, please contact the administrator.'
    )
  }
}

export const logout = () => async (dispatch, getState, client) => {
  // remove the authorization cookie
  removeUserToken()

  // reset the app's store to avoid any unnecessary data leak
  client.resetStore()

  // throw a success message
  dispatch(logoutSuccess())
  toastr.info('Disconnected', 'You have successfully logged out.')

  Router.push('/auth')
}
