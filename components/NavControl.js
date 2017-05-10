import Button from 'custom-grommet-package/components/Button'
import Logo from 'custom-grommet-package/components/icons/Grommet'
import PropTypes from 'prop-types'
import { PureComponent } from 'react'
import Title from 'custom-grommet-package/components/Title'
import { connect } from 'react-redux'
import { navActivate } from '../actions/nav'

class NavControl extends PureComponent {
  render() {
    const { name, nav: { active } } = this.props
    let result
    const title = <Title>{name || 'Invoice App'}</Title>
    if (!active) {
      result = (
        <Button onClick={() => this.props.dispatch(navActivate(true))}>
          <Logo />
          {title}
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
