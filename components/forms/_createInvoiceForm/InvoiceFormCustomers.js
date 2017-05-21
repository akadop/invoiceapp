import { Divider } from 'material-ui'
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'

const InvoiceFormCustomers = () => {
  return (
    <div>
      <Field
        name="firstName"
        component={TextField}
        floatingLabelText="First Name"
        fullWidth
        underlineShow={false}
      />
      <Divider />
      <Field
        name="lastName"
        component={TextField}
        floatingLabelText="Last Name"
        fullWidth
        underlineShow={false}
      />
      <Divider />
      <Field
        name="driversLisc"
        component={TextField}
        floatingLabelText="Drivers Liscence #"
        fullWidth
        underlineShow={false}
      />
      <Divider />
      <Field
        name="email"
        component={TextField}
        underlineShow={false}
        floatingLabelText="Email"
        fullWidth
      />
      <Divider />
      <Field
        name="address"
        component={TextField}
        floatingLabelText="Address"
        fullWidth
        underlineShow={false}
      />
      <Divider />
      <Field
        name="addressCity"
        component={TextField}
        floatingLabelText="City"
        fullWidth
        underlineShow={false}
      />
      <Divider />
      <Field
        name="addressState"
        component={TextField}
        floatingLabelText="State"
        fullWidth
        underlineShow={false}
      />
      <Divider />
      <Field
        name="addressZip"
        component={TextField}
        floatingLabelText="Zipcode"
        fullWidth
        underlineShow={false}
      />
    </div>
  )
}

export default InvoiceFormCustomers
