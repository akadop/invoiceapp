import LayoutContainer from '../containers/LayoutContainer'
import MyInvoiceListContainer from '../containers/MyInvoiceListContainer'
import React from 'react'
import SearchInvoiceFormContainer
  from '../containers/SearchInvoiceFormContainer'
import { compose } from 'ramda'
import withAuth from '../lib/hocs/withAuth'
import withCore from '../lib/hocs/withData'
import withServiceWorker from '../lib/hocs/withServiceWorker'

export const page = compose(withServiceWorker, withAuth, withData)

export default page(props => (
  <LayoutContainer {...props}>
    <SearchInvoiceFormContainer />
    <MyInvoiceListContainer />
  </LayoutContainer>
))
