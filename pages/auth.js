import './sw' // get the service worker on the page

import AuthFormContainer from '../containers/AuthFormContainer'
import LayoutContainer from '../containers/LayoutContainer'
import { compose } from 'ramda'
import withData from '../lib/hocs/withData'
import withGuest from '../lib/hocs/withGuest'
import withLayout from '../lib/hocs/withLayout'

export const page = compose(withGuest, withData, withLayout)

export default page(props => (
  <LayoutContainer {...props}>
    <AuthFormContainer />
  </LayoutContainer>
))
