import './sw' // get the service worker on the page.

import ItemForm from '../components/Item/ItemForm'
import page from '../hocs/page'
import showResults from './showResults'

// expose the CreateCustomerFormContainer module wrapped with apollo/redux
export default page(() => <ItemForm onSubmit={showResults} />)
