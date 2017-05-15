import { gql } from 'react-apollo'

export default gql`
  query allUsers($firstName: String!, $lastName: String!, $email: String!) {
    allUsers(
      orderBy: createdAt_DESC, 
      filter: { OR: [
        { firstName_contains: $firstName }, 
        { lastName_contains: $lastName }, 
        { email_contains: $email } 
        ] }
        ) {
          email
          id
          firstName
          lastName
          role
          invoices {
            id
          }
          _invoicesMeta {
            count
          }
        }
      }`
