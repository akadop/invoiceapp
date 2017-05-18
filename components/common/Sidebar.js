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
    fontSize: 22,
    color: typography.textFullWhite,
    lineHeight: `${spacing.desktopKeylineIncrement}px`,
    fontWeight: typography.fontWeightLight,
    backgroundColor: '#222',
    paddingLeft: 40,
    height: 56,
  },
  menuItem: {
    color: '#ffffff',
    fontSize: 14,
  },
  menu: {
    width: 223,
    backgroundColor: '#333',
  },
}

export default ({ isAuthenticated, sidebarOpen }) => {
  return (
    <Drawer open={sidebarOpen}>
      <div style={styles.logo}>
        Invoice App
      </div>
      <Menu style={styles.menu}>
        <MenuItem
          primaryText="Create Invoice"
          leftIcon={<Web color="#2ecc71" />}
          onTouchTap={() => Router.push('/')}
          style={styles.menuItem}
        />
        <MenuItem
          primaryText="Employee Manual"
          leftIcon={<ContentLink color="#2ecc71" />}
          onTouchTap={() => Router.push('/employee-manual')}
          style={styles.menuItem}
        />
      </Menu>
    </Drawer>
  )
}
