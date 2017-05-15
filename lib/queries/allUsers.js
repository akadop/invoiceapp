import { gql } from 'react-apollo'

export default gql`
  query allUsers($firstName: String!, $lastName: String!, $email: String!) {
    allUsers(orderBy: createdAt_DESC, filter: { OR: [{ firstName_contains: $firstName }, { lastName_contains: $lastName }, { email_contains: $email } ] }) {
      id
      role
      email
      firstName
      lastName
      _invoicesMeta {
        count
      }
      invoices {
       id
       createdAt
       storeLocation
       _itemsMeta {
          count
        }
      }
    }
  }
`
