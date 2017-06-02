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
        style={{ marginLeft: 20, width: '50%' }}
        underlineShow={false}
      />
      <Field
        name="lastName"
        component={TextField}
        floatingLabelText="Last Name"
        underlineShow={false}
      />
      <Divider />
      <Field
        name="driversLisc"
        component={TextField}
        floatingLabelText="Drivers Liscence #"
        style={{ marginLeft: 20, width: '50%' }}
        underlineShow={false}
      />
      <Field
        name="email"
        component={TextField}
        underlineShow={false}
        floatingLabelText="Email"
      />
      <Divider />
      <Field
        name="address"
        component={TextField}
        floatingLabelText="Address"
        style={{ marginLeft: 20, width: '50%' }}
        underlineShow={false}
      />
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
        style={{ marginLeft: 20, width: '50%' }}
        underlineShow={false}
      />
      <Field
        name="addressZip"
        component={TextField}
        floatingLabelText="Zipcode"
        underlineShow={false}
      />
    </div>
  )
}

export default InvoiceFormCustomers
