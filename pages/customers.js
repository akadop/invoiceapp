import CustomersListContainer
  from '../components/Customers/CustomersListContainer.js'
import pageWithDataAndLayout from '../hocs/pageWithDataAndLayout'

// expose the CustomersList module wrapped with apollo/redux
export default pageWithDataAndLayout(() => <CustomersListContainer />)
