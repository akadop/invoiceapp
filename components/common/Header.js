import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import Router from 'next/router'

const styles = {
  title: {
    cursor: 'pointer',
  },
}

export default ({
  isAuthenticated,
  handleToggleSidebarOpen,
  user,
  actions: { logout },
}) => {
  return (
    <AppBar
      title={<span style={styles.title}>Invoice App</span>}
      onLeftIconButtonTouchTap={handleToggleSidebarOpen}
      iconElementRight={
        isAuthenticated && user
          ? <FlatButton
              label={isAuthenticated ? 'Logout' : 'Login'}
              onTouchTap={isAuthenticated ? logout : null}
              onMouseEnter={() => Router.prefetch('/auth')}
            />
          : null
      }
    />
  )
}
