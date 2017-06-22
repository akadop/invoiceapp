import { gql } from 'react-apollo'

export default gql`
  query isAuthenticated{
    user {
      id
      role
      email
      firstName
      lastName
      }
    }`
