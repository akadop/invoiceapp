import { gql } from 'react-apollo'

export default gql`
  mutation createUser($email: String!, $password: String!, $firstName: String!, $lastName: String!, $role: USER_ROLE!) {
    createUser(authProvider: {
      email: {
        email: $email,
        password: $password,
      }
    },
    firstName: $firstName,
    lastName: $lastName,
    role: $role,
    userinfo: $userinfo,
    ) {
      id,
      role,
      email,
      firstName,
      lastName,
    }
  }
`
