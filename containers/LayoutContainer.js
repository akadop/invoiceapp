import Layout from '../components/common/Layout'
import authenticatedUser from '../lib/queries/authenticatedUser'
import { compose } from 'ramda'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import { logout } from '../lib/stories/auth'
import mapActions from '../lib/util/mapActions'

export const mapStateToProps = ({
  auth: { isAuthenticated },
  ui: { isLoading },
}) => ({
  isAuthenticated,
  isLoading,
})

export const mapDispatchToProps = mapActions({ logout })

export const container = compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(authenticatedUser, { options: { fetchPolicy: 'network-only' } })
)

export default container(Layout)
