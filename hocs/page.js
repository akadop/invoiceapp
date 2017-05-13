import { compose } from 'redux'
import withData from './withData'

//import withLayout from './withLayout'

// import the Data wrapper and Layout wrapper, combine both of them to make the final wrapper.

export default compose(withData)
