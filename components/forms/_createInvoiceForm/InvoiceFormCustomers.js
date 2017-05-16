import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'

const style = {
  marginLeft: 20,
  width: 'calc(100% - 20px)',
}

const InvoiceFormCustomers = () => (
  <div>
    <Field
      name="firstName"
      component={TextField}
      floatingLabelText="First Name"
      fullWidth
      underlineShow={false}
      style={style}
    />
    <Field
      name="lastName"
      component={TextField}
      floatingLabelText="Last Name"
      fullWidth
      underlineShow={false}
      style={style}
    />
    <Field
      name="email"
      component={TextField}
      underlineShow={false}
      floatingLabelText="Email"
      fullWidth
      style={style}
    />
    <Field
      name="address"
      component={TextField}
      floatingLabelText="Address"
      fullWidth
      underlineShow={false}
      style={style}
    />
    <Field
      name="addressCity"
      component={TextField}
      floatingLabelText="City"
      fullWidth
      underlineShow={false}
      style={style}
    />
    <Field
      name="addressState"
      component={TextField}
      floatingLabelText="State"
      fullWidth
      underlineShow={false}
      style={style}
    />
    <Field
      name="addressZip"
      component={TextField}
      floatingLabelText="Zipcode"
      fullWidth
      underlineShow={false}
      style={style}
    />
  </div>
)

export default InvoiceFormCustomers
