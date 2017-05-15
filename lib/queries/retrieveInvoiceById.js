import { gql } from 'graphql-tag'

export default gql`
  query($invoiceId: ID!) {
    Invoice(id: $invoiceId) {
      id
 			storeLocation
      user
      customer
      items
      createdAt
      payment
    }
  }
`
