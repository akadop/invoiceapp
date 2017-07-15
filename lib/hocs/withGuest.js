import { Component } from 'react'
import Router from 'next/router'
import { loadGetInitialProps } from 'next/dist/lib/utils'
import { loadUserToken } from '../util/cookieUtils'

export default ComposedComponent =>
  class extends Component {
    static displayName = `WithGuest(${ComposedComponent.displayName})`
    static async getInitialProps(ctx) {
      const loggedIn = Boolean(loadUserToken())

      if (loggedIn) {
        if (!process.browser) {
          ctx.res.writeHead(302, { Location: '/' })
          return res.json({
            message: 'logged in!'
          })
        }
        return Router.push('/')
      }

      return { ...(await loadGetInitialProps(ComposedComponent, ctx)) }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }
