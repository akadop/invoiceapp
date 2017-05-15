import gql from 'react-apollo'

export default gql`
  mutation createUser($email: String!, $firstName: String!, $lastName: String!, $role: USER_ROLE!, $idToken: String!) {
    createUser(
      authProvider: {auth0: {idToken: $idToken}},
      email: $email,
      firstName: $firstName,
      lastName: $lastName,
      role: $role,
      auth0UserId: $auth0UserId,
    ){
      id
    }
  }`
