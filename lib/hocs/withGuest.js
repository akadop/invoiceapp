import { Component } from 'react'
import Cookies from 'js-cookie'
import Router from 'next/router'
import { connect } from 'react-redux'
import { loadGetInitialProps } from 'next/dist/lib/utils'
import { toastr } from 'react-redux-toastr'

export default ComposedComponent =>
  class extends Component {
    static async getInitialProps(ctx) {
      const token = Cookies.get('userToken')
      const loggedIn = Boolean(token)

      if (loggedIn) {
        if (!process.browser) {
          ctx.res.writeHead(302, { Location: '/' })

          return ctx
        }

        return Router.push('/')
      }

      return { ...(await loadGetInitialProps(ComposedComponent, ctx)) }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }
