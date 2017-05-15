import { gql } from 'react-apollo'

export default gql`
  query allInvoices($invoiceId: ID!, $invoiceName: String!, $storeName: String) {
    allInvoices(orderBy: createdAt_DESC, filter: { storeName: { id_contains: $storeName }, name_contains: $invoiceName }) {
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
      }
      createdAt,
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
