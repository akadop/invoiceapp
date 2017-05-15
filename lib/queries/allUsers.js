import gql from 'graphql-tag'

export default gql`
  query allUsers($firstName: String!, $lastName: String!, $email: String!) {
    allUsers(orderBy: createdAt_DESC, filter: { OR: [{ firstName_contains: $userFirstName }, { lastName_contains: $userLastName }, { email_contains: $userEmail } ] }) {
      id
      role
      email
      firstName
      lastName
      picture
      _invoicesMeta {
        count
      }
      invoices {
       id
       createdAt
       name
       _itemsMeta {
          count
        }
      }
    }
  }
`
