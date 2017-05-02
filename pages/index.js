import { App, Heading, Section } from 'grommet'

import { Component } from 'react'
import CreateCustomerFormContainer
  from '../components/Customers/containers/CreateCustomerFormContainer.js'
import FooterNav from '../components/Layout/FooterNav'
import Head from 'next/head'
import Layout from '../components/Layout/FooterNav'
import NavTop from '../components/Layout/NavTop'
import grommetStyle from 'grommet/scss/vanilla/index.scss'

export default class CreateCustomerPage extends Component {
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
        <App centered={true}>
          <NavTop />
          <Section
            responsive
            justify="center"
            align="center"
            flex={true}
            alignContent="center"
          >
            <Heading tag="h2" margin="large">Add New Customer</Heading>
            <CreateCustomerFormContainer />
          </Section>
          <FooterNav />
        </App>
      </div>
    )
  }
}
