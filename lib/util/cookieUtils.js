import Cookies from 'js-cookie'

export function removeUserToken() {
  Cookies.remove('userToken')
}

export function saveUserToken(userToken, options) {
  Cookies.set('userToken', userToken, options)
}

export function loadUserToken() {
  return Cookies.get('userToken')
}
