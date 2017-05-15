import gql from 'graphql-tag'

export default gql`
  query {
    user {
      id
      role
      email
      firstName
      lastName
      picture
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
