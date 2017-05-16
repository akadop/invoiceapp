import { BottomNavigation, BottomNavigationItem, Paper } from 'material-ui'

import CardGiftCardIcon from 'material-ui/svg-icons/action/card-giftcard'
import GameIcon from 'material-ui/svg-icons/av/games'
import GroupWorkIcon from 'material-ui/svg-icons/action/group-work'
import Router from 'next/router'
import SupervisorAccountIcon
  from 'material-ui/svg-icons/action/supervisor-account'

export default ({ user, pathname, actions: { selectBottomNav } }) => {
  const routeSelectedIndex = pathname === '/'
    ? 0
    : pathname === '/my-invoices' || pathname === '/invoices' ? 1 : 2

  return (
    <div>
      <BottomNavigation selectedIndex={routeSelectedIndex}>
        <BottomNavigationItem
          label="Home"
          icon={<CardGiftCardIcon />}
          onTouchTap={() => {
            selectBottomNav({ selectedBottomNav: 0 })
            Router.push('/')
          }}
        />
        {user.role === 'USER'
          ? <BottomNavigationItem
              label="My Invoices"
              icon={<GameIcon />}
              onTouchTap={() => {
                selectBottomNav({ selectedBottomNav: 1 })
                Router.push('/my-invoices')
              }}
            />
          : <BottomNavigationItem
              label="New Invoice"
              icon={<GroupWorkIcon />}
              onTouchTap={() => {
                selectBottomNav({ selectedBottomNav: 1 })
                Router.push('/invoices')
              }}
            />}
        {user.role === 'ADMIN'
          ? <BottomNavigationItem
              label="Employees"
              icon={<SupervisorAccountIcon />}
              onTouchTap={() => {
                selectBottomNav({ selectedBottomNav: 2 })
                Router.push('/invoices')
              }}
            />
          : <BottomNavigationItem style={{ display: 'none' }} />}
      </BottomNavigation>
    </div>
  )
}
