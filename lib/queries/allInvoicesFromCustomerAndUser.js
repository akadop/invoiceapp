import { gql } from 'react-apollo'

export default gql`
  query allInvoices($userId: ID!, $firstName: String!, lastName: String!) {
    allInvoices(orderBy: createdAt_DESC, filter: { customer: { firstName_contains: $firstName, lastName_contains: $lastName }, users_some: { id_contains: $userId } }) {
      id
 			customer {
         firstName
         lastName
         email
         id
       }
      storeName,
      createdAt,
    }
  }
`
