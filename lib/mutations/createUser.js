import { gql } from 'react-apollo'

export default gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $role: USER_ROLE!
  ) {
    createUser(
      authProvider: { email: { email: $email, password: $password } }
      firstName: $firstName
      lastName: $lastName
      role: $role
    ) {
      id
      role
      email
      firstName
      lastName
      password
    }
  }
`
