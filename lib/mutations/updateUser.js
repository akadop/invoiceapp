import { gql } from 'react-apollo'

export default gql`
  mutation updateUser($id: ID!, $firstName: String!, $lastName: String!, $role: USER_ROLE!) {
    updateUser(
      id: $id,
      firstName: $firstName,
      lastName: $lastName,
      role: $role,
    ) {
      id,
      role,
      email,
      firstName,
      lastName,
    }
  }
`
