import gql from 'graphql-tag'

export default gql`
  query {
    user {
      id,
      role,
      email,
      firstname,
      lastname,
      picture,
      promotion {
       id,
       name,
       location,
       year
      }
    }
  }  
`
