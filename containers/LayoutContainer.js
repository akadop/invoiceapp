import Layout from '../components/premice/Layout'
import authenticatedUser from '../universal/queries/authenticatedUser'
import { compose } from 'ramda'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import { logout } from '../universal/stories/auth'
import mapActions from '../universal/utils/mapActions'
import { selectBottomNav } from '../universal/actions/ui'

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
