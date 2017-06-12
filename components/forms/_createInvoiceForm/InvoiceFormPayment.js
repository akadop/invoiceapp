import { Divider, MenuItem } from 'material-ui'
import { SelectField, TextField } from 'redux-form-material-ui'

import { Field } from 'redux-form'

const InvoiceFormPayment = () =>
  <div>
    <Field
      name="total"
      component={TextField}
      floatingLabelText="Total"
      underlineShow={false}
      fullWidth
    />
    <Divider />
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
    <Divider />
    <Field
      name="balance"
      component={TextField}
      floatingLabelText="Balance"
      underlineShow={false}
      fullWidth
    />
    <Divider />
    <Field
      name="deposit"
      component={TextField}
      floatingLabelText="Deposit"
      underlineShow={false}
      fullWidth
    />
  </div>

export default InvoiceFormPayment
