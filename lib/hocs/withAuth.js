import { Component } from 'react'
import Router from 'next/router'
import cookie from 'react-cookie'
import { loadGetInitialProps } from 'next/dist/lib/utils'

export default ComposedComponent =>
  class extends Component {
    static async getInitialProps(ctx) {
      const token = cookie.load('__AUTH_TOKEN__')
      const loggedIn = Boolean(token)

      if (!loggedIn) {
        if (!process.browser) {
          ctx.res.writeHead(302, { Location: '/auth' })

          return ctx.res.send()
        }

        return Router.push('/auth')
      }

      return { ...(await loadGetInitialProps(ComposedComponent, ctx)) }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }
