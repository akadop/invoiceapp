import Document, { Head, Main, NextScript } from 'next/document'

import React from 'react'
import stylesheet from '../styles/styles.scss'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
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
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#222" />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}