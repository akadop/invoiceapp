import './sw' // get the service worker on the page.

import InvoiceFormContainer from '../components/Invoices/InvoiceFormContainer'
import page from '../hocs/page'

// expose the CreateCustomerFormContainer module wrapped with apollo/redux
export default page(() => <InvoiceFormContainer />)
