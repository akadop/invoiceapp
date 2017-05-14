import { Card, CardHeader, CardText, MenuItem } from 'material-ui'
import { SelectField, TextField } from 'redux-form-material-ui'

import { Field } from 'redux-form'

const InvoiceFormPayment = () => (
  <Card>
    <CardHeader
      title="Payment Information"
      subtitle="payment is not collected through this app, this is for invoice purposes only."
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable>
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
    </CardText>
  </Card>
)

export default InvoiceFormPayment
