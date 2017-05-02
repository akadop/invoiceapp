import { App, Section } from 'grommet'
import React, { Component } from 'react'

import CustomersListContainer
  from '../modules/Customers/containers/CustomersListContainer.js'
import FooterNav from '../modules/Layout/FooterNav'
import Head from 'next/head'
import Layout from '../modules/Layout/FooterNav'
import NavTop from '../modules/Layout/NavTop'
import grommetStyle from 'grommet/scss/vanilla/index.scss'

export default class CreateCustomerPage extends Component {
  render() {
    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <title>Carpet Mills of America</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />
        </Head>
        <style dangerouslySetInnerHTML={{ __html: grommetStyle }} />
        <App>
          <NavTop />
          <Section responsive flex={true}>
            <CustomersListContainer />
          </Section>
          <FooterNav />
        </App>
      </div>
    )
  }
}
