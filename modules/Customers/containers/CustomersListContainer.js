import { gql, graphql } from 'react-apollo'

import CustomersList from '../components/CustomersList'

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
export default CustomersListWithGraph
