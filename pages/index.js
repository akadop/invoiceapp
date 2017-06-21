//import '../lib/util/offlineInstall' // Get our service worker on the page

import CreateInvoiceDialogContainer from '../containers/CreateInvoiceDialogContainer'
import InvoiceListContainer from '../containers/InvoiceListContainer'
import LayoutContainer from '../containers/LayoutContainer'
import { compose } from 'ramda'
import withAuth from '../lib/hocs/withAuth'
import withData from '../lib/hocs/withData'

export const page = compose(withAuth, withData)

export default page(props =>
  <LayoutContainer {...props}>
    <InvoiceListContainer />
    <CreateInvoiceDialogContainer />
  </LayoutContainer>
)
