import { Component } from 'react'
import initOffline from '../bootstrap/initOffline'
import { loadGetInitialProps } from 'next/dist/lib/utils'

export default ComposedComponent =>
  class extends Component {
    static async getInitialProps(ctx) {
      return { ...(await loadGetInitialProps(ComposedComponent, ctx)) }
    }

    componentWillMount() {
      initOffline(process.browser && process.env.NODE_ENV === 'production')
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }
