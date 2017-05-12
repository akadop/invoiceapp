import withWidth, { LARGE, SMALL } from 'material-ui/utils/withWidth'

import BottomNav from './BottomNav'
import { Component } from 'react'
import Header from './Header'
import LeftDrawer from './LeftDrawer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavLinks from './NavLinks'
import PropTypes from 'prop-types'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navDrawerOpen: false,
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen,
    })
  }

  render() {
    let { navDrawerOpen } = this.state
    const paddingLeftDrawerOpen = 236

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0,
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0,
      },
    }

    return (
      <div>
        <Header
          styles={styles.header}
          handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(
            this
          )}
        />

        <LeftDrawer
          navDrawerOpen={navDrawerOpen}
          menus={NavLinks.menus}
          username="User Admin"
        />

        <div style={styles.container}>
          {this.props.children}
        </div>
        <BottomNav />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
