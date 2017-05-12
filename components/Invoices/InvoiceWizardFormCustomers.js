import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import { Field, reduxForm } from 'redux-form'

import Divider from 'material-ui/Divider'
import RaisedButton from 'material-ui/RaisedButton'
import { TextField } from 'redux-form-material-ui'
import validate from '../../lib/util/validate'

const InvoiceWizardFormCustomers = props => {
  const { handleSubmit } = props
  return (
    <Card>
      <CardHeader title="Customer Information" />
      <CardText>
        <form onSubmit={handleSubmit}>
          <Field
            name="firstName"
            component={TextField}
            floatingLabelText="First Name"
            underlineShow={false}
          />
          <Divider />
          <Field
            name="lastName"
            component={TextField}
            floatingLabelText="Last Name"
            underlineShow={false}
          />
          <Divider />
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
          <Divider />
          <Field
            name="addressCity"
            component={TextField}
            floatingLabelText="City"
            underlineShow={false}
          />
          <Divider />
          <Field
            name="addressState"
            component={TextField}
            floatingLabelText="State"
            underlineShow={false}
          />
          <Divider />
          <Field
            name="addressZip"
            component={TextField}
            floatingLabelText="Zipcode"
            underlineShow={false}
          />
          <Divider />
        </form>
      </CardText>
      <CardActions>
        <RaisedButton primary label="Next" onTouchTap={handleSubmit} />
      </CardActions>
    </Card>
  )
}

export default reduxForm({
  form: 'invoice', // <--- same form name
  destroyOnUnmount: false, // <--- preserve form data
  forceUnregisterOnUnmount: true, // <---- unregister fields on unmount
  validate,
})(InvoiceWizardFormCustomers)
