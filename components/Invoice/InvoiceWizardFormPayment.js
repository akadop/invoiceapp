import {
  Box,
  Button,
  Footer,
  Form,
  FormFields,
  Header,
  Heading,
} from 'custom-grommet-package'
import { Field, reduxForm } from 'redux-form'

import renderSelectField from './util/renderSelectField'
import renderTextField from './util/renderTextField'
import validate from './util/validate'

const CreditCardTypes = ['Visa', 'American Express', 'Discover', 'Master Card']

const InvoiceWizardFormPayment = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props
  return (
    <Form onSubmit={handleSubmit}>
      <FormFields>
        <Field
          name="total"
          type="number"
          label="total"
          component={renderTextField}
        />
        <Field
          name="paymentBy"
          type="select"
          label="Credit Card Type"
          component={renderSelectField}
          options={CreditCardTypes}
        />
        <Field
          name="deposit"
          type="number"
          label="Deposit"
          component={renderTextField}
        />
        <Field
          name="balance"
          type="number"
          label="Balance Remaining"
          component={renderTextField}
        />
        <Footer
          pad={{ between: 'small', vertical: 'medium' }}
          alignContent="center"
          justify="center"
          responsive={true}
        >
          <Button
            secondary
            label="Back to Items"
            type="button"
            onClick={previousPage}
          />
          <Button
            primary
            label="Submit Invoice"
            type="submit"
            disabled={pristine || submitting}
          />
        </Footer>
      </FormFields>
    </Form>
  )
}

export default reduxForm({
  form: 'invoice', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(InvoiceWizardFormPayment)
