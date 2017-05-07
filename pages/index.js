import CreateCustomerFormContainer
  from '../modules/Customers/containers/CreateCustomerFormContainer.js'
import pageWithDataAndLayout from '../hocs/pageWithDataAndLayout'

// expose the CreateCustomerFormContainer module wrapped with apollo/redux
export default pageWithDataAndLayout(() => <CreateCustomerFormContainer />)
