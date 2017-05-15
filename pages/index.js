import CreateInvoiceDialogContainer
  from '../containers/CreateInvoiceDialogContainer'
import InvoiceListContainer from '../containers/InvoiceListContainer'
import LayoutContainer from '../containers/LayoutContainer'
import React from 'react'
import SearchInvoiceFormContainer
  from '../containers/SearchInvoiceFormContainer'
import { compose } from 'ramda'
import withAuth from '../lib/hocs/withAuth'
import withData from '../lib/hocs/withData'
import withServiceWorker from '../lib/hocs/withServiceWorker'

export const page = compose(withServiceWorker, withAuth, withData)

export default page(props => (
  <LayoutContainer {...props}>
    <SearchInvoiceFormContainer />
    <InvoiceListContainer />
    <CreateInvoiceDialogContainer />
  </LayoutContainer>
))
