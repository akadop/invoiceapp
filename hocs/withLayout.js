import { Component } from 'react'
import Head from 'next/head'
import Main from '../modules/Layout/Main'
import grommetStyle from 'grommet/scss/vanilla/index.scss'
import { loadGetInitialProps } from 'next/dist/lib/utils'

export default ComposedComponent => class WithLayout extends Component {
  static async getInitialProps(ctx) {
    return loadGetInitialProps(ComposedComponent, ctx)
  }

  render() {
    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <title>Demo Invoice</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />
        </Head>
        <style dangerouslySetInnerHTML={{ __html: grommetStyle }} />
        <Main>
          <ComposedComponent {...this.props} />
        </Main>
      </div>
    )
  }
}
