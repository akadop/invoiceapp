import Layout from '../components/common/Layout'
import authenticatedUser from '../lib/queries/authenticatedUser'
import { compose } from 'ramda'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import { logout } from '../universal/stories/auth'
import mapActions from '../lib/util/mapActions'
import { selectBottomNav } from '../lib/actions/ui'

export const mapStateToProps = ({
  auth: { isAuthenticated },
  ui: { isLoading, selectedBottomNav },
}) => ({
  isAuthenticated,
  isLoading,
  selectedBottomNav,
})

export const mapDispatchToProps = mapActions({ logout, selectBottomNav })

export const container = compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(authenticatedUser, { options: { fetchPolicy: 'network-only' } })
)

export default container(Layout)
