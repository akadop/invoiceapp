import {
  BottomNavigation,
  BottomNavigationItem,
} from 'material-ui/BottomNavigation'

import FontIcon from 'material-ui/FontIcon'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import Router from 'next/router'

const recentsIcon = <FontIcon className="material-icons">Invoices</FontIcon>
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>

const style = {
  width: '100%',
  bottom: 0,
  position: 'fixed',
}

const NAV_PAGE = ['/', '/invoices']

const BottomNav = ({ pathname }) => (
  <BottomNavigation selectedIndex={NAV_PAGE.indexOf(pathname)} style={style}>
    <BottomNavigationItem
      label="Recents"
      icon={recentsIcon}
      onTouchTap={() => Router.push(NAV_PAGE[0])}
    />
    <BottomNavigationItem
      label="Favorites"
      icon={favoritesIcon}
      onTouchTap={() => Router.push(NAV_PAGE[1])}
    />
  </BottomNavigation>
)

BottomNav.props = {
  pathname: PropTypes.string,
}

export default BottomNav
