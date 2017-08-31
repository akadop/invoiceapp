import Header from './Header'
import Loader from './Loader'
import Sidebar from './Sidebar'
import { toggleSidebarOpen } from '../../lib/actions/ui'

export default ({
  children,
  isLoading,
  sidebarOpen,
  auth: isAuthenticated,
  data: { user },
  actions: { logout, toggleSidebarOpen }
}) => {
  let marginLeftDrawerOpen = 256
  let styles = {
    baseContainer: {
      marginLeft: sidebarOpen ? marginLeftDrawerOpen : 0,
      clear: 'both'
    }
  }
  return (
    <div>
      <Sidebar sidebarOpen={sidebarOpen} />
      <div style={styles.baseContainer}>
        <Header
          isAuthenticated={isAuthenticated}
          user={user}
          actions={{ logout }}
          handleToggleSidebarOpen={toggleSidebarOpen}
        />
        {children}
        <Loader isLoading={isLoading} />
      </div>
    </div>
  )
}
