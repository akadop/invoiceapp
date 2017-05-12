import { Card, CardHeader, CardText } from 'material-ui/Card'
import { SelectField, TextField } from 'redux-form-material-ui'

import { Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'

const PaymentFormSection = () => (
  <Card>
    <CardHeader
      title="Payment Information"
      subtitle="payment is not collected through this app, this is for invoice purposes only."
    />
    <CardText>
      <Field
        name="total"
        component={TextField}
        hintText="Total"
        underlineShow={false}
        fullWidth
      />
      <Field
        hintText="Credit Card Type"
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
        hintText="Balance"
        underlineShow={false}
        fullWidth
      />
      <Field
        name="deposit"
        component={TextField}
        hintText="Deposit"
        underlineShow={false}
        fullWidth
      />
    </CardText>
  </Card>
)

export default PaymentFormSection
