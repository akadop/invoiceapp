import { Divider, Drawer, Menu, MenuItem } from 'material-ui'
import { blue600, white } from 'material-ui/styles/colors'
import { spacing, typography } from 'material-ui/styles'

import ContentLink from 'material-ui/svg-icons/content/link'
import PersonAdd from 'material-ui/svg-icons/social/person-add'
import Router from 'next/router'
import Web from 'material-ui/svg-icons/av/web'

const styles = {
  logo: {
    cursor: 'pointer',
    backgroundColor: '#fff',
    lineHeight: `${spacing.desktopKeylineIncrement}px`,
    fontWeight: typography.fontWeightLight,
    fontSize: 18,
    color: '#333',
    height: 150,
    display: 'flex',
  },
  menuItem: {
    fontSize: 14,
    fontWeight: 400,
    textAlign: 'center',
    width: '100%',
  },
  menu: {
    width: 220,
    marginLeft: 10,
  },
}

export default ({ isAuthenticated, sidebarOpen }) => {
  return (
    <Drawer open={sidebarOpen}>
      <div style={styles.logo}>
        <img
          src="../../static/logo2.svg"
          alt="Carpet Mills of America"
          width="100%"
        />
      </div>
      <Menu style={styles.menu} disableAutoFocus>
        <MenuItem
          primaryText="Create Invoice"
          leftIcon={<Web color="#7e57c2" />}
          onTouchTap={() => Router.push('/')}
          style={styles.menuItem}
        />
        <MenuItem
          primaryText="Employee Manual"
          leftIcon={<ContentLink color="#7e57c2" />}
          onTouchTap={() => Router.push('/employee-manual')}
          style={styles.menuItem}
        />
      </Menu>
    </Drawer>
  )
}
