import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import Menu from 'material-ui/svg-icons/navigation/menu'
import Router from 'next/router'

// top nav bar
export default ({
  isAuthenticated,
  handleToggleSidebarOpen,
  styles,
  user,
  actions: { logout },
}) => {
  const styled = {
    appBar: {
      position: 'fixed',
      top: 0,
      overflow: 'hidden',
      maxHeight: '57',
    },
    menuButton: {
      marginLeft: 16,
    },
    iconsRightContainer: {
      marginLeft: 24,
    },
    title: {
      cursor: 'pointer',
    },
  }
  return (
    <AppBar
      title={<span style={styled.title}>Invoice App</span>}
      style={(styled.appBar, { ...styles })}
      iconElementLeft={
        <IconButton
          style={styled.menuButton}
          onTouchTap={handleToggleSidebarOpen}
          color="222"
        >
          <Menu />
        </IconButton>
      }
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
