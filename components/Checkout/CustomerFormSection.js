import { Card, CardHeader, CardText } from 'material-ui/Card'

import Divider from 'material-ui/Divider'
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'

const CustomerFormSection = () => {
  return (
    <Card>
      <CardHeader title="Customer Information" />
      <CardText>
        <Field
          name="firstName"
          component={TextField}
          hintText="First Name"
          underlineShow={false}
          fullWidth
        />
        <Field
          name="lastName"
          component={TextField}
          hintText="Last Name"
          underlineShow={false}
          fullWidth
        />
        <Field
          name="email"
          component={TextField}
          hintText="Email"
          underlineShow={false}
          fullWidth
        />
        <Divider />
        <Field
          name="address"
          component={TextField}
          hintText="Address"
          underlineShow={false}
        />
        <Field
          name="addressCity"
          component={TextField}
          hintText="City"
          underlineShow={false}
        />
        <Divider />
        <Field
          name="addressState"
          component={TextField}
          hintText="State"
          underlineShow={false}
        />
        <Field
          name="addressZip"
          component={TextField}
          hintText="Zipcode"
          underlineShow={false}
        />
      </CardText>
    </Card>
  )
}

export default CustomerFormSection
