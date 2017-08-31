import { Component } from 'react'
import Cookies from 'js-cookie'
import Router from 'next/router'
import { loadGetInitialProps } from 'next/dist/lib/utils'
import { loadUserToken } from '../util/cookieUtils'

export default ComposedComponent =>
  class extends Component {
    static displayName = `WithAuth(${ComposedComponent.displayName})`

    static async getInitialProps(ctx) {
      const loggedIn = Boolean(Cookies.get('userToken'))

      if (!loggedIn) {
        if (!process.browser) {
          ctx.res.writeHead(302, {
            Location: '/auth'
          })

          return res.json('please sign in again.')
        }
        return Router.push('/')
      }
      return { ...(await loadGetInitialProps(ComposedComponent, ctx)) }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }
