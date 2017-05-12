import { Field, reduxForm } from 'redux-form'
import { SelectField, TextField } from 'redux-form-material-ui'

import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

const InvoiceWizardFormPayment = props => {
  const { handleSubmit, previousPage, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="total"
        component={renderTextField}
        floatingTextLabel="Total"
        underlineShow={false}
      />
      <Field
        floatingLabelText="Credit Card Type"
        name="paymentBy"
        component={SelectField}
        underlineShow={false}
        fullWidth
      >
        <MenuItem value="Visa" primaryText="Visa" />
        <MenuItem value="MasterCard" primaryText="MasterCard" />
        <MenuItem value="Discover" primaryText="Discover" />
        <MenuItem value="AmericanExpress" primaryText="American Express" />
      </Field>
      <Field
        name="balance"
        component={renderTextField}
        floatingTextLabel="Balance"
        underlineShow={false}
      />
      <Field
        name="deposit"
        component={renderTextField}
        floatingTextLabel="Deposit"
        underlineShow={false}
      />
      <FlatButton secondary label="back" onTouchTap={previousPage} />
      <RaisedButton primary label="Review" onTouchTap={handleSubmit} />
    </form>
  )
}

export default reduxForm({
  form: 'invoice', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(InvoiceWizardFormPayment)
