import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import PropTypes from 'prop-types'
import React from 'react'
import { Router } from 'next/router'

const styles = {
  title: {
    cursor: 'pointer',
  },
}

export default ({
  isAuthenticated,
  user,
  actions: { logout, toggleSidebar },
}) => {
  return (
    <div>
      <AppBar
        title={<span style={styles.title}>Invoice App</span>}
        onLeftIconButtonTouchTap={toggleSidebar}
        iconElementRight={
          isAuthenticated && user
            ? <FlatButton
                label={isAuthenticated ? 'Logout' : 'Login'}
                onTouchTap={isAuthenticated ? logout : null}
              />
            : null
        }
      />
    </div>
  )
}
