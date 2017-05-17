import { Divider, Drawer, Menu, MenuItem } from 'material-ui'

import ContentLink from 'material-ui/svg-icons/content/link'
import PersonAdd from 'material-ui/svg-icons/social/person-add'
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye'
import Router from 'next/router'

export default ({ isAuthenticated, sidebarOpen }) => {
  return (
    <div>
      <Drawer open={sidebarOpen}>
        <Menu>
          <MenuItem
            primaryText="Create Invoice"
            leftIcon={<PersonAdd />}
            onTouchTap={() => Router.push('/')}
          />
          <MenuItem
            primaryText="Employee Manual"
            leftIcon={<ContentLink />}
            onTouchTap={() => Router.push('/employee-manual')}
          />
        </Menu>
      </Drawer>
    </div>
  )
}
