import '../lib/offline-install' // Get our service worker on the page

import CreateCustomerFormContainer
  from '../modules/Customers/containers/CreateCustomerFormContainer.js'
import page from '../hocs/page'

export default page(() => <CreateCustomerFormContainer />)
