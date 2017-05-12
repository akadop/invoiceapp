import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import { Field, reduxForm } from 'redux-form'
import { SelectField, TextField } from 'redux-form-material-ui'

import FlatButton from 'material-ui/FlatButton'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import validate from '../../lib/util/validate'

const InvoiceWizardFormPayment = props => {
  const { handleSubmit, previousPage, submitting } = props
  return (
    <Card>
      <CardHeader
        title="Payment Information"
        subtitle="payment is not collected through this app, this is for invoice purposes only."
      />
      <CardText>
        <form onSubmit={handleSubmit}>
          <Field
            name="total"
            component={TextField}
            floatingLabelText="Total"
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
            component={TextField}
            floatingLabelText="Balance"
            underlineShow={false}
          />
          <Field
            name="deposit"
            component={TextField}
            floatingLabelText="Deposit"
            underlineShow={false}
          />
        </form>
      </CardText>
      <CardActions>
        <FlatButton secondary label="back" onTouchTap={previousPage} />
        <RaisedButton primary label="Review" onTouchTap={handleSubmit} />
      </CardActions>
    </Card>
  )
}

export default reduxForm({
  form: 'invoice', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(InvoiceWizardFormPayment)
