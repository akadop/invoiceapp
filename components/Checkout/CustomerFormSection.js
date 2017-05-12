import { Card, CardHeader, CardText } from 'material-ui/Card'

import Divider from 'material-ui/Divider'
import { Field } from 'redux-form'
import PropTypes from 'prop-types'
import { TextField } from 'redux-form-material-ui'
import validate from '../../lib/util/validate'

const CustomerFormSection = () => {
  return (
    <Card>
      <CardHeader title="Customer Information" />
      <CardText>
        <Field
          name="firstName"
          component={TextField}
          floatingLabelText="First Name"
          underlineShow={false}
        />
        <Field
          name="lastName"
          component={TextField}
          floatingLabelText="Last Name"
          underlineShow={false}
        />
        <Field
          name="email"
          component={TextField}
          floatingLabelText="Email"
          underlineShow={false}
        />
        <Divider />
        <Field
          name="address"
          component={TextField}
          floatingLabelText="Address"
          underlineShow={false}
        />
        <Field
          name="addressCity"
          component={TextField}
          floatingLabelText="City"
          underlineShow={false}
        />
        <Field
          name="addressState"
          component={TextField}
          floatingLabelText="State"
          underlineShow={false}
        />
        <Field
          name="addressZip"
          component={TextField}
          floatingLabelText="Zipcode"
          underlineShow={false}
        />
      </CardText>
    </Card>
  )
}

export default CustomerFormSection
