import { gql } from 'react-apollo'

export default gql`
  mutation createCustomer($firstName: String!, $lastName: String!, $email: String, $address: String!, $addressCity: String!, $addressState: String!, $addressZip: String!) {
      createCustomer(
        address: $address, 
        addressCity: $addressCity, 
        addressState: $addressState, 
        addressZip: $addressZip, 
        email: $email, 
        firstName: $firstName, 
        lastName: $lastName
        ) {
        firstName
        lastName
        email
        addressCity
        addressZip
        addressState
        }
      }
    `
