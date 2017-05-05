import React, { Component } from 'react'

import Head from 'next/head'
import Main from '../modules/Layout/Main'
import { loadGetInitialProps } from 'next/dist/lib/utils'

export default ComposedComponent =>
  class WithLayout extends React.Component {
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
              content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui"
            />
            <link
              href="//cdnjs.cloudflare.com/ajax/libs/grommet/1.0.1/grommet.min.css"
              rel="stylesheet"
              type="text/css"
            />
            <link rel="manifest" href="static/manifest.json" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="theme-color" content="#865cd6" />
          </Head>
          <Main>
            <ComposedComponent {...this.props} />
          </Main>
        </div>
      )
    }
  }
