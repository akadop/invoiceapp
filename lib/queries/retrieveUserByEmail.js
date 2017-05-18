import { gql } from 'react-apollo'

export default gql`
  query($email: String!) {
    User(email: $email) {
      id
      role
      email
      firstName
      lastName
      _invoicesMeta {
        count
      }
    }
  }`
