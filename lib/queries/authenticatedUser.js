import { gql } from 'react-apollo'

export default gql`
  query user{
    user {
      id
      role
      email
      firstName
      lastName
      }
    }`
