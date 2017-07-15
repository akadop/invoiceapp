import { gql } from 'react-apollo'

export default gql`
  query allInvoices($firstName: String, $lastName: String) {
    allInvoices(orderBy: createdAt_DESC) {
      id
      storeName
      customer {
        firstName
        lastName
        email
      }
      payment {
        balance
        deposit
        paymentBy
        total
      }
      createdAt
    }
    user {
      id
      role
      email
      firstName
      lastName
      _invoicesMeta {
        count
      }
    }
  }
`
