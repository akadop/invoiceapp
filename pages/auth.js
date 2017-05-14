import AuthFormContainer from '../containers/AuthFormContainer'
import LayoutContainer from '../containers/LayoutContainer'
import React from 'react'
import { compose } from 'ramda'
import withCore from '../lib/hocs/withData'
import withGuestGuard from '../lib/hocs/withGuestGuard'
import withServiceWorker from '../lib/hocs/withServiceWorker'

export const page = compose(withServiceWorker, withGuestGuard, withCore)

export default page(props => (
  <LayoutContainer {...props}>
    <AuthFormContainer />
  </LayoutContainer>
))
