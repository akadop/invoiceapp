import { gql } from 'react-apollo'

export default gql`
  mutation ($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token,
      user {
        id,
        role,
        email,
        firstName,
        lastName,
      }
    }
  }
`
