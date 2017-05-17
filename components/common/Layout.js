import Header from './Header'
import Loader from './Loader'
import Sidebar from './Sidebar'
import { toggleSidebarOpen } from '../../lib/actions/ui'

export default ({
  children,
  isAuthenticated,
  isLoading,
  sidebarOpen,
  data: { user },
  actions: { logout, toggleSidebarOpen },
}) => {
  let withSidebarOpened = sidebarOpen ? 260 : 0
  return (
    <div>
      <Sidebar isAuthenticated={isAuthenticated} sidebarOpen={sidebarOpen} />
      <main
        style={{
          marginLeft: withSidebarOpened,
          paddingBottom: 250,
          background: 'F7F7F7',
        }}
      >
        <Header
          isAuthenticated={isAuthenticated}
          user={user}
          actions={{ logout }}
          handleToggleSidebarOpen={toggleSidebarOpen}
        />
        {children}
      </main>
      <Loader isLoading={isLoading} />
    </div>
  )
}
