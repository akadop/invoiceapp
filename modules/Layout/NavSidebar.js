import { Anchor, Button, Header, Menu, Sidebar, Title } from 'grommet'
import React, { Component } from 'react'

import CloseIcon from 'grommet/components/icons/base/Close'
import Logo from 'grommet/components/icons/Grommet'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { connect } from 'react-redux'
import { navActivate } from '../actions/nav'

class NavSidebar extends Component {
  constructor() {
    super()
    this._onClose = this._onClose.bind(this)
  }

  _onClose() {
    this.props.dispatch(navActivate(false))
  }

  render() {
    const { nav: { items } } = this.props

    const links = items.map(page => (
      <Anchor
        onClick={() => url.pushTo(`${page.path}`)}
        key={page.label}
        label={page.label}
      />
    ))
    {
      // prefetch
      Router.prefetch('/'), Router.prefetch('/customers')
    }

    return (
      <Sidebar colorIndex="neutral-3" fixed={true}>
        <Header size="large" justify="between" pad={{ horizontal: 'medium' }}>
          <Title onClick={this._onClose} a11yTitle="Close Menu">
            <Logo />
            <span>Demo</span>
          </Title>
          <Button
            icon={<CloseIcon />}
            onClick={this._onClose}
            plain={true}
            a11yTitle="Close Menu"
          />
        </Header>
        <Menu fill={true} primary={true}>
          {links}
        </Menu>
      </Sidebar>
    )
  }
}

NavSidebar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string,
        label: PropTypes.string,
      })
    ),
  }),
}

const select = state => ({
  nav: state.nav,
})

export default connect(select)(NavSidebar)
