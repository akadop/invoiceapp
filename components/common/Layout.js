import Header from './Header'
import Loader from './Loader'
import Sidebar from './Sidebar'
import { toggleSidebarOpen } from '../../lib/actions/ui'

// the layout that's going to wrap our individual pages

export default ({
  children,
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
    <div>
      <Sidebar sidebarOpen={sidebarOpen} />
      <div style={styles.baseContainer}>
        <Header
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
