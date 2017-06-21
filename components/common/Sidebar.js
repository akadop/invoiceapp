import { Drawer, Menu, MenuItem } from 'material-ui'
import { spacing, typography } from 'material-ui/styles'

import Router from 'next/router'
import Web from 'material-ui/svg-icons/av/web'

const styles = {
  logo: {
    cursor: 'pointer',
    backgroundColor: '#fff',
    fontSize: 18,
    color: '#333',
    height: 150,
    display: 'flex',
  },
  menuItem: {
    fontSize: 14,
    lineHeight: `${spacing.desktopKeylineIncrement}px`,
    fontWeight: typography.fontWeightMedium,
    width: '100%',
    color: '#222',
  },
  menu: {
    width: 220,
    backgroundColor: '#fff',
    marginLeft: 10,
  },
}

export default ({ sidebarOpen }) => {
  return (
    <Drawer open={sidebarOpen}>
      <div style={styles.logo}>
        <img
          src="../../static/logo2.svg"
          alt="Demo Carpet Store"
          width="100%"
        />
      </div>
      <Menu style={styles.menu} disableAutoFocus>
        <MenuItem
          primaryText="Create Invoice"
          leftIcon={<Web color={'ff4081'} />}
          onTouchTap={() => Router.push('/')}
          style={styles.menuItem}
        />
      </Menu>
    </Drawer>
  )
}

/**
 *         <MenuItem
          primaryText="Employee Manual"
          leftIcon={<ContentLink color="#ff4081" />}
          onTouchTap={() => Router.push('/employee-manual')}
          style={styles.menuItem}
        />
 */
