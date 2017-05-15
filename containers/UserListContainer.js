import { compose, or } from 'ramda'

import UserList from '../components/lists/UserList'
import allUsers from '../lib/queries/allUsers'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'

export const mapStateToProps = ({ ui: { filteredUserName } }) => ({
  filteredUserName,
})

export const container = compose(
  connect(mapStateToProps, null),
  graphql(allUsers, {
    options: ({ filteredUserName }) => ({
      variables: {
        firstName: or(filteredUserName, ''),
        lastName: or(filteredUserName, ''),
        email: or(filteredUserName, ''),
      },
      fetchPolicy: 'network-only',
    }),
  })
)

export default container(UserList)
