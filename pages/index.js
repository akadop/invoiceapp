import './sw' // get the service worker on the page.

import InvoiceFormContainer from '../components/Checkout/InvoiceFormContainer'
import page from '../hocs/page'
import showResults from './showResults'

// expose the CreateCustomerFormContainer module wrapped with apollo/redux
export default page(() => <InvoiceFormContainer onSubmit={showResults} />)
