import { Component } from 'react'
import Router from 'next/router'
import { loadGetInitialProps } from 'next/dist/lib/utils'
import { loadUserToken } from '../util/cookieUtils'

export default ComposedComponent =>
  class extends Component {
    static displayName = `WithAuth(${ComposedComponent.displayName})`
    static async getInitialProps(ctx) {
      const loggedIn = Boolean(loadUserToken())

      if (!loggedIn) {
        if (!process.browser) {
          ctx.res.writeHead(302, { Location: '/auth' })

          return res.json({
            message: 'please login again',
          })
        } else {
          return Router.push('/')
        }
      }
      return { ...(await loadGetInitialProps(ComposedComponent, ctx)) }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }
