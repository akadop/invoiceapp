import { gql } from 'react-apollo'

export default gql`
  query allInvoices($firstName: String, $lastName: String) {
    allInvoices(orderBy: createdAt_DESC, filter: { customer: { firstName_contains: $firstName, lastName_contains: $lastName } }) {
      id,
      storeName,
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
    },
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
