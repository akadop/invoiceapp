//import '../lib/util/offlineInstall' // Get our service worker on the page

import AuthFormContainer from '../containers/AuthFormContainer'
import LayoutContainer from '../containers/LayoutContainer'
import { compose } from 'ramda'
import withData from '../lib/hocs/withData'
import withGuest from '../lib/hocs/withGuest'

export const page = compose(withGuest, withData)

export default page(props =>
  <LayoutContainer {...props}>
    <AuthFormContainer />
  </LayoutContainer>
)
