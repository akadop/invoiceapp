import { Component } from 'react'
import Cookies from 'js-cookie'
import Router from 'next/router'
import { loadGetInitialProps } from 'next/dist/lib/utils'

export default ComposedComponent =>
  class extends Component {
    static displayName = `WithAuth(${ComposedComponent.displayName})`
    static async getInitialProps(ctx) {
      const token = Cookies.get('userToken')
      const loggedIn = Boolean(token)

      if (!loggedIn) {
        if (!process.browser) {
          ctx.res.writeHead(302, { Location: '/auth' })

          return res.json({
            message: 'please login again',
          })
        }

        return Router.push('/auth')
      }
      return { ...(await loadGetInitialProps(ComposedComponent, ctx)) }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }
