import gql from 'graphql-tag'

export default gql`
  query($email: String!) {
    User(email: $email) {
      id,
      role,
      email,
      firstName,
      lastName,
      picture,
      _invoicesMeta {
        count
      }
    }`
