import Header from './Header'
import Loader from './Loader'
import Sidebar from './Sidebar'
import { toggleSidebarOpen } from '../../lib/actions/ui'

// the layout that's going to wrap our individual pages

export default ({
  children,
  isAuthenticated,
  isLoading,
  sidebarOpen,
  data: { user },
  actions: { logout, toggleSidebarOpen },
}) => {
  let marginLeftDrawerOpen = 256
  let styles = {
    baseContainer: {
      marginLeft: sidebarOpen ? marginLeftDrawerOpen : 0,
      clear: 'both',
    },
  }
  return (
    <div className="Grid -top -center">
      <Sidebar isAuthenticated={isAuthenticated} sidebarOpen={sidebarOpen} />
      <div style={styles.baseContainer}>
        <Header
          isAuthenticated={isAuthenticated}
          user={user}
          actions={{ logout }}
          handleToggleSidebarOpen={toggleSidebarOpen}
        />
        <div className="Cell -12of12">
          {children}
        </div>
        <Loader isLoading={isLoading} />
      </div>
    </div>
  )
}
