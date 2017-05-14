import { contains, or, split } from 'ramda'
import { loginSuccess, logoutSuccess } from '../actions/auth'
import { startLoader, stopLoader } from '../actions/ui'

import Router from 'next/router'
import cookie from 'react-cookie'
import createUser from '../mutations/createUser'
import retrieveUserByEmail from '../queries/retrieveUserByEmail'
import signinUser from '../mutations/signinUser'
import { toastr } from 'react-redux-toastr'
import updateUser from '../mutations/updateUser'

export const login = () => async (dispatch, getState, client) => {
  const { authForm } = getState().form
  const { values } = authForm

  if (!values) {
    return toastr.error('Connexion', 'Veuillez remplir tout les champs !')
  }

  try {
    const { email, password } = values

    dispatch(startLoader())

    // First, we need to authenticate user on Epitech API.
    const authentication = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    const { err, token } = await authentication.json()

    if (err || !token) {
      setTimeout(() => dispatch(stopLoader()), 500)

      return toastr.error('Connexion', 'Vos identifiants sont invalide !')
    }

    // Then, we need to fetch user data on Epitech API.
    const userResponse = await fetch('/api/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })

    const {
      lastname, // tolower
      firstname, // tolower
      userinfo, // twitter -> value, city -> value, website -> value, facebook -> value
      picture, // URL
      admin, // true | false
      location, // FR/LYN || FR/PAR
      scolaryear, // 2016
    } = await userResponse.json()

    const canBeAdmin = contains(
      email,
      split(',', BYPASS_ADMIN_PROTECTION_WHEN_ITS)
    )

    // Then, we need to register user on GraphQL API.
    try {
      await client.mutate({
        mutation: createUser,
        variables: {
          email,
          password,
          lastname,
          firstname,
          userinfo,
          picture,
          location,
          scolaryear: parseInt(scolaryear, 10),
          role: canBeAdmin || admin ? 'ADMIN' : 'USER',
        },
      })
    } catch (err) {
      // If we have an error at this point, user is probably already register.
      // So, just retrieve it and update information.
      const retrievedUser = await client.query({
        query: retrieveUserByEmail,
        variables: { email },
      })

      // If register fail for some reason and user is not created, just bypass.
      if (retrievedUser.data.err || !retrievedUser.data.User) {
        setTimeout(() => dispatch(stopLoader()), 500)

        return toastr.error(
          'Connexion',
          'Une erreur est survenue lors de la création de votre compte, réessayer plus tard !'
        )
      }

      const id = retrievedUser.data.User.id

      await client.mutate({
        mutation: updateUser,
        variables: {
          id,
          lastname,
          firstname,
          userinfo,
          picture,
          location,
          scolaryear: parseInt(scolaryear, 10),
          role: canBeAdmin || admin ? 'ADMIN' : 'USER',
        },
      })
    }

    // Now, user is fully authenticated on Epitech API and register with latest data on GraphQL API.
    // Just sign-in !
    const signinUserResponse = await client.mutate({
      mutation: signinUser,
      variables: { email, password },
    })

    // Probably banned.
    if (
      signinUserResponse.data.err ||
      signinUserResponse.data.signinUser.user.isBan
    ) {
      setTimeout(() => dispatch(stopLoader()), 500)

      return toastr.error(
        'Connexion',
        'Votre compte a été bannis définitivement !'
      )
    }

    // Success, store JWT token cookies and re-route.
    dispatch(loginSuccess())
    setTimeout(() => dispatch(stopLoader()), 500)

    cookie.save('__AUTH_TOKEN__', signinUserResponse.data.signinUser.token, {
      path: '/',
    })
    toastr.success('Connexion', 'Vous êtes connecté !')

    Router.push('/')
  } catch (err) {
    setTimeout(() => dispatch(stopLoader()), 500)

    toastr.error(
      'Connexion',
      "Une erreur interne est survenue, contactez l'administration !"
    )
  }
}

export const logout = () => async (dispatch, getState, client) => {
  cookie.remove('__AUTH_TOKEN__', { path: '/' })

  client.resetStore()

  dispatch(logoutSuccess())

  toastr.info('Déconnexion', 'Vous êtes déconnecté, à bientôt !')

  Router.push('/auth')
}
