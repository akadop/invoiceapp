import { Field, reduxForm } from 'redux-form'

import RaisedButton from 'material-ui/RaisedButton'
import { TextField } from 'redux-form-material-ui'
import renderTextField from '../../lib/util/renderTextField'
import validate from '../../lib/util/validate'

const InvoiceWizardFormCustomers = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        component={renderTextField}
        floatingTextLabel="First Name"
        underlineShow={false}
      />
      <Field
        name="lastName"
        component={renderTextField}
        floatingTextLabel="Last Name"
        underlineShow={false}
      />
      <Field
        name="email"
        component={renderTextField}
        floatingTextLabel="Email"
        underlineShow={false}
      />
      <Field
        name="address"
        component={renderTextField}
        floatingTextLabel="Address"
        underlineShow={false}
      />
      <Field
        name="addressCity"
        component={renderTextField}
        floatingTextLabel="City"
        underlineShow={false}
      />
      <Field
        name="addressState"
        component={renderTextField}
        floatingTextLabel="State"
        underlineShow={false}
      />
      <Field
        name="addressZip"
        component={renderTextField}
        floatingTextLabel="Zipcode"
        underlineShow={false}
      />
      <RaisedButton primary label="Next" onTouchTap={handleSubmit} />
    </form>
  )
}

export default reduxForm({
  form: 'invoice', // <--- same form name
  destroyOnUnmount: false, // <--- preserve form data
  forceUnregisterOnUnmount: true, // <---- unregister fields on unmount
  validate,
})(InvoiceWizardFormCustomers)
