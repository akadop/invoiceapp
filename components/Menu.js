import Menu from 'react-burger-menu/lib/menus/slide'
import { decorator as reduxBurgerMenu } from 'redux-burger-menu'

const MenuRoutes = [
  { path: '/index', label: 'Create Invoice' },
  { path: '/invoiceList', label: 'View Invoices' },
  { path: '/handbook', label: 'Employee Handbook' },
]

class MenuWrap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: true,
    }
  }

  render() {
    return (
      <MenuWrap wait={20} side={this.state.side}>
        <Menu
          id={this.state.currentMenu}
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
          right
        >
          {items}
        </Menu>
      </MenuWrap>
    )
  }
}

export default reduxBurgerMenu(Menu)
