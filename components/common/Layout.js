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
  let withSidebarOpened = sidebarOpen ? 254 : 0
  let paddingLeftDrawerOpen = 236
  return (
    <div
      style={{
        marginLeft: withSidebarOpened,
      }}
      className="Grid -top -center"
    >
      <Header
        isAuthenticated={isAuthenticated}
        user={user}
        actions={{ logout }}
        handleToggleSidebarOpen={toggleSidebarOpen}
        styles={{ paddingLeft: sidebarOpen ? paddingLeftDrawerOpen : 0 }}
      />
      <Sidebar isAuthenticated={isAuthenticated} sidebarOpen={sidebarOpen} />
      <div className="Cell -12of12">
        {children}
      </div>
      <Loader isLoading={isLoading} />
    </div>
  )
}
