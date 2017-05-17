import Header from './Header'
import Loader from '../common/Loader'
import Sidebar from './Sidebar'

const styles = {
  main: {
    marginTop: 10,
    paddingBottom: 250,
  },
  marginLeft: siderbarOpen ? 257 : 0,
}

export default ({
  children,
  isAuthenticated,
  isLoading,
  sidebarOpen,
  data: { user },
  actions: { logout, toggleSidebar },
}) => (
  <div style={styles.marginLeft}>
    <Header
      isAuthenticated={isAuthenticated}
      user={user}
      actions={{ logout, toggleSidebar }}
    />
    <Sidebar isAuthenticated={isAuthenticated} sidebarOpen={sidebarOpen} />
    <main style={{ background: 'FFF' }}>
      {children}
    </main>
    <Loader isLoading={isLoading} />
    <style jsx />
  </div>
)
