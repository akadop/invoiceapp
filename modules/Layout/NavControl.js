import { Box, Button, Title } from 'grommet'
import React, { Component, PropTypes } from 'react'

import Logo from 'grommet/components/icons/Grommet'
import { connect } from 'react-redux'
import { navActivate } from '../actions/nav'

class NavControl extends Component {
  render() {
    const { name, nav: { active } } = this.props

    let result
    const title = <Title>{name || 'Demo'}</Title>
    if (!active) {
      result = (
        <Button onClick={() => this.props.dispatch(navActivate(true))}>
          <Box direction="row" responsive={false} pad={{ between: 'small' }}>
            <Logo />
            {title}
          </Box>
        </Button>
      )
    } else {
      result = title
    }
    return result
  }
}

NavControl.propTypes = {
  dispatch: PropTypes.func.isRequired,
  name: PropTypes.string,
  nav: PropTypes.object,
}

const select = state => ({
  nav: state.nav,
})

export default connect(select)(NavControl)
