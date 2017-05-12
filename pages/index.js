import './sw' // get the service worker on the page.

import SecondInvoiceContainer
  from '../components/Checkout/SecondInvoiceContainer'
import page from '../hocs/page'
import showResults from './showResults'

// expose the CreateCustomerFormContainer module wrapped with apollo/redux
export default page(() => <SecondInvoiceContainer onSubmit={showResults} />)
