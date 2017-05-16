import { SelectField, TextField } from 'redux-form-material-ui'

import { Field } from 'redux-form'
import { MenuItem } from 'material-ui'

const InvoiceFormPayment = () => (
  <div>
    <Field
      name="total"
      component={TextField}
      floatingLabelText="Total"
      underlineShow={false}
      fullWidth
    />
    <Field
      floatingLabelText="Payment Type"
      name="paymentBy"
      component={SelectField}
      underlineShow={false}
      fullWidth
    >
      <MenuItem value="Visa" primaryText="Visa" />
      <MenuItem value="MasterCard" primaryText="MasterCard" />
      <MenuItem value="Discover" primaryText="Discover" />
      <MenuItem value="AmEx" primaryText="American Express" />
      <MenuItem value="Cash" primaryText="Cash" />
      <MenuItem value="Check" primaryText="Check" />
    </Field>
    <Field
      name="balance"
      component={TextField}
      floatingLabelText="Balance"
      underlineShow={false}
      fullWidth
    />
    <Field
      name="deposit"
      component={TextField}
      floatingLabelText="Deposit"
      underlineShow={false}
      fullWidth
    />
  </div>
)

export default InvoiceFormPayment
