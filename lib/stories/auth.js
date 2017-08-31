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

    dispatch(startLoader()) // start loading animation when user hits submit.

    // now sign in.
    const signinUserResponse = await client.mutate({
      mutation: signinUser,
      variables: { email, password }
    })

    saveUserToken(signinUserResponse.data.signinUser.token, { path: '/' }) // if successful, store cookie with js-cookie

    dispatch(
      loginSuccess({
        userToken: signinUserResponse.data.signinUser.token
      })
    )

    setTimeout(() => dispatch(stopLoader()), 500)

    toastr.success('Login', 'You have successfully logged in.')

    Router.push('/')
  } catch (err) {
    setTimeout(() => dispatch(stopLoader()), 500)

    toastr.error('Error with Login', 'Contact the administrator, or try again.')
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
