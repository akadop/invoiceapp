import { Card, CardHeader, CardText } from 'material-ui/Card'

import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'

const styles = {
  titleColor: '#d500f9',
}

const CustomerFormSection = props => (
  <Card style={styles}>
    <CardHeader
      title="Customer Information"
      subtitle="Make sure the customer email is correct, as a copy of this invoice will automatically be emailed to them. Click anywhere in this area to expand this section."
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable>
      <Field
        name="firstName"
        component={TextField}
        floatingLabelText="First Name"
        errorText={props.error}
        fullWidth
        underlineShow={false}
      />
      <Field
        name="lastName"
        component={TextField}
        errorText={props.error}
        floatingLabelText="Last Name"
        fullWidth
        underlineShow={false}
      />
      <Field
        name="email"
        errorText={props.error}
        component={TextField}
        underlineShow={false}
        floatingLabelText="Email"
        fullWidth
      />
      <Field
        name="address"
        errorText={props.error}
        component={TextField}
        floatingLabelText="Address"
        fullWidth
        underlineShow={false}
      />
      <Field
        name="addressCity"
        errorText={props.error}
        component={TextField}
        floatingLabelText="City"
        fullWidth
        underlineShow={false}
      />
      <Field
        name="addressState"
        errorText={props.error}
        component={TextField}
        floatingLabelText="State"
        fullWidth
        underlineShow={false}
      />
      <Field
        name="addressZip"
        errorText={props.error}
        component={TextField}
        floatingLabelText="Zipcode"
        fullWidth
        underlineShow={false}
      />
    </CardText>
  </Card>
)

export default CustomerFormSection
