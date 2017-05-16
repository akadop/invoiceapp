import {
  AppBar,
  Avatar,
  Chip,
  Divider,
  IconButton,
  IconMenu,
  MenuItem,
} from 'material-ui'
import { gql, graphql } from 'react-apollo'

import AccountIcon from 'material-ui/svg-icons/action/account-circle'
import HomeIcon from 'material-ui/svg-icons/action/home'
import LogoutIcon from 'material-ui/svg-icons/communication/vpn-key'
import PeopleIcon from 'material-ui/svg-icons/social/people'
import Router from 'next/router'
import theme from '../../lib/hocs/theme'
import { toastr } from 'react-redux-toastr'

export default ({ isAuthenticated, user, actions: { logout } }) => (
  <div>
    <AppBar
      style={{ background: '#FFF' }}
      title={
        isAuthenticated &&
          user &&
          <Chip style={{ height: '30px', position: 'relative', top: '25%' }}>
            <Avatar src={user.picture} />
          </Chip>
      }
      iconElementLeft={
        <IconButton onTouchTap={() => Router.push('/')}>
          <HomeIcon />
        </IconButton>
      }
      iconElementRight={
        isAuthenticated && user
          ? <IconMenu
              iconButtonElement={
                <IconButton style={{ borderLeft: '2px solid #fff' }}>
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
          : null
      }
    />
    <div className="logo" />
    <style jsx>{`
     .logo {
        display: none;
        width: 125px;
        height: 125px;
        position: absolute;
        top: -30px;
        transform: translate3d(-50%, 0, 0);
        left: 50%;
        background: url("static/logo.png") no-repeat center;
        background-size: contain;
        z-index: 99999;
      }

      @media all and (min-width: 635px) {
        .logo {
          display: block;
        }
      }
    `}</style>
  </div>
)
