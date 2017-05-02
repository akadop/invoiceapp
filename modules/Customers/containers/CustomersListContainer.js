import { gql, graphql } from 'react-apollo'

import CustomersList from '../components/CustomersList'
import withData from '../../../hocs/withData'

const allCustomersQuery = gql`
  query allCustomers {
    allCustomers {
      firstName
      lastName
      email
      address
      addressCity
      addressState
      addressZip
      id
    }
  }`

const CustomersListWithGraph = graphql(allCustomersQuery)(CustomersList)
const CustomersListWithData = withData(CustomersListWithGraph)

export default CustomersListWithData
