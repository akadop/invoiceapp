import { gql } from 'react-apollo'

export default gql`
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
