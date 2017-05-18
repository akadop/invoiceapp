import {
  AppBar,
  Divider,
  FlatButton,
  IconButton,
  IconMenu,
  MenuItem,
} from 'material-ui'

import AccountIcon from 'material-ui/svg-icons/action/account-circle'
import LogoutIcon from 'material-ui/svg-icons/communication/vpn-key'
import Menu from 'material-ui/svg-icons/navigation/menu'
import PeopleIcon from 'material-ui/svg-icons/social/people'
import Router from 'next/router'
import { toastr } from 'react-redux-toastr'

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
    title: {
      cursor: 'pointer',
    },
  }
  return (
    <AppBar
      title={<span style={styled.title}>Demo</span>}
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
        <IconMenu
          iconButtonElement={
            <IconButton>
              <AccountIcon color="#fff" />
            </IconButton>
          }
          targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
          <MenuItem
            leftIcon={<PeopleIcon />}
            primaryText="My Account"
            onTouchTap={() =>
              toastr.warning(
                'My Account',
                'This feature is not yet available !'
              )}
          />
          <Divider />
          <MenuItem
            leftIcon={<LogoutIcon />}
            primaryText="Disconnect"
            onTouchTap={logout}
            onMouseEnter={() => Router.prefetch('/auth')}
          />
        </IconMenu>
      }
    />
  )
}
