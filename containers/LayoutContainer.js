import Layout from '../components/common/Layout'
import authenticatedUser from '../lib/queries/authenticatedUser'
import { compose } from 'ramda'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import { logout } from '../lib/stories/auth'
import mapActions from '../lib/util/mapActions'
import { toggleSidebarOpen } from '../lib/actions/ui'

export const mapStateToProps = ({
  isAuthenticated,
  ui: { isLoading, sidebarOpen }
}) => ({
  isAuthenticated,
  isLoading,
  sidebarOpen
})

export const mapDispatchToProps = mapActions({ logout, toggleSidebarOpen })

export const container = compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(authenticatedUser, {
    options: {
      fetchPolicy: 'network-and-cache'
    }
  })
)

export default container(Layout)
