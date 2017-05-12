import { Card, CardHeader, CardText } from 'material-ui/Card'
import { SelectField, TextField } from 'redux-form-material-ui'

import { Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import PropTypes from 'prop-types'

const PaymentFormSection = () => {
  return (
    <Card>
      <CardHeader
        title="Payment Information"
        subtitle="payment is not collected through this app, this is for invoice purposes only."
      />
      <CardText>
        <Field
          name="total"
          component={TextField}
          floatingLabelText="Total"
          underlineShow={false}
          fullWidth
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
}

export default PaymentFormSection
