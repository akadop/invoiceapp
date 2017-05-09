import { Component } from 'react'
import Head from 'next/head'
import Main from '../modules/Layout/Main'
import akastyle from 'custom-grommet-package/scss/vanilla/index.scss'
import { loadGetInitialProps } from 'next/dist/lib/utils'

// The basic layout that is going to be on every page.
// No point in repeating the code over and over for each page, just make it a wrapper that goes over every page.

export default ComposedComponent =>
  class WithLayout extends Component {
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
            <link rel="manifest" href="static/manifest.json" />
            <meta name="mobile-web-app-capable" content="yes" />
            <link
              rel="icon"
              type="image/png"
              href="/static/img/favicon-16x16.png"
              sizes="16x16"
            />
            <link
              rel="icon"
              type="image/png"
              href="/static/img/favicon-32x32.png"
              sizes="32x32"
            />
            <link
              rel="icon"
              type="image/png"
              href="/static/img/pwa-192x192.png"
              sizes="192x192"
            />
            <link
              rel="icon"
              type="image/png"
              href="/static/img/android-192x192.png"
              sizes="192x192"
            />
            <link
              rel="apple-touch-icon"
              href="/static/img/apple-touch-icon-180x180.png"
              sizes="180x180"
            />
            <meta
              name="msapplication-config"
              content="/static/img/browserconfig.xml"
            />
            <meta name="theme-color" content="#222" />
          </Head>
          <style dangerouslySetInnerHTML={{ __html: akastyle }} />
          <Main>
            <ComposedComponent {...this.props} />
          </Main>
        </div>
      )
    }
  }
