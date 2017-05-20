import { loginSuccess, logoutSuccess } from '../actions/auth'
import { startLoader, stopLoader } from '../actions/ui'

import Router from 'next/router'
import { contains } from 'ramda'
import cookie from 'react-cookie'
import signinUser from '../mutations/signinUser'
import { toastr } from 'react-redux-toastr'
import updateUser from '../mutations/updateUser'

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

    // Success, store JWT token cookies and re-route.
    dispatch(loginSuccess())
    setTimeout(() => dispatch(stopLoader()), 500)

    cookie.save('__AUTH_TOKEN__', signinUserResponse.data.signinUser.token, {
      path: '/',
    })
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
  cookie.remove('__AUTH_TOKEN__', { path: '/' })

  // reset the app's store to avoid any unnecessary data leak
  client.resetStore()

  // throw a success message
  dispatch(logoutSuccess())
  toastr.info('Disconnected', 'You have successfully logged out.')

  Router.push('/auth')
}
