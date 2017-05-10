import { Field, reduxForm } from 'redux-form'

import Button from 'custom-grommet-package/components/Button'
import Form from 'custom-grommet-package/components/Form'
import NavControl from '../Layout/NavControl'
import renderTextField from './util/renderTextField'
import validate from './util/validate'

const InvoiceWizardFormCustomers = props => {
  const { handleSubmit } = props
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="firstName" component={renderTextField} label="First Name" />
      <Field name="lastName" component={renderTextField} label="Last Name" />
      <Field name="email" component={renderTextField} label="Email" />
      <Field name="address" component={renderTextField} label="Address" />
      <Field name="addressCity" component={renderTextField} label="City" />
      <Field name="addressState" component={renderTextField} label="State" />
      <Field name="addressZip" component={renderTextField} label="Zipcode" />
      <Button primary label="Next" type="submit" onClick={handleSubmit} />
    </Form>
  )
}

export default reduxForm({
  form: 'invoice', // <--- same form name
  destroyOnUnmount: false, // <--- preserve form data
  forceUnregisterOnUnmount: true, // <---- unregister fields on unmount
  validate,
})(InvoiceWizardFormCustomers)
