import './sw' // get the service worker on the page.

import CreateCustomerFormContainer
  from '../components/Customers/CreateCustomerFormContainer.js'
import pageWithDataAndLayout from '../hocs/pageWithDataAndLayout'

// expose the CreateCustomerFormContainer module wrapped with apollo/redux
export default pageWithDataAndLayout(() => <CreateCustomerFormContainer />)
