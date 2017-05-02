import React, { Component } from 'react'

import App from 'grommet/components/App'
import NavSidebar from './NavSidebar'
import PropTypes from 'prop-types'
import Split from 'grommet/components/Split'
import { connect } from 'react-redux'
import { navResponsive } from '../../actions/nav'

class Main extends Component {
  constructor() {
    super()
    this._onResponsive = this._onResponsive.bind(this)
  }

  _onResponsive(responsive) {
    this.props.dispatch(navResponsive(responsive))
  }

  render() {
    const {
      nav: { active: navActive, enabled: navEnabled, responsive },
    } = this.props
    const includeNav = navActive && navEnabled
    let nav
    if (includeNav) {
      nav = <NavSidebar />
    }
    const priority = includeNav && responsive === 'single' ? 'left' : 'right'

    return (
      <App centered={true}>
        <Split
          priority={priority}
          flex="right"
          onResponsive={this._onResponsive}
        >
          {nav}
          {this.props.children}
        </Split>
      </App>
    )
  }
}

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.any,
  nav: PropTypes.shape({
    active: PropTypes.bool,
    enabled: PropTypes.bool,
    responsive: PropTypes.string,
  }),
}

const select = state => ({
  nav: state.nav,
})

export default connect(select)(Main)
