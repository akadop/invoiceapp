import { gql } from 'react-apollo'

export default gql`
  query {
    user {
      id
      role
      email
      firstName
      lastName
      }
    }`
