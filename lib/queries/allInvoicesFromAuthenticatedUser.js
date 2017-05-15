import { gql } from 'react-apollo'

export default gql`
  query allInvoices($invoiceId: ID!, $invoiceName: String!) {
    allInvoices(orderBy: createdAt_DESC, filter: { storeLocation: { id_contains: $storeName }, expire: false, name_contains: $invoiceName }) {
      id,
      storeName,
 			customer,
      items,
      payment,
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
