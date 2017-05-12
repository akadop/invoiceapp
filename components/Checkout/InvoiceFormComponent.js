import { FormSection, reduxForm } from 'redux-form'

import CustomerFormSection from './CustomerFormSection'
import InvoiceFormDetailsSection from './InvoiceFormDetailsSection'
import ItemsFormSection from './ItemsFormSection'
import Paper from 'material-ui/Paper'
import PaymentFormSection from './PaymentFormSection'
import RaisedButton from 'material-ui/RaisedButton'
import validate from '../../lib/util/validate'

// Invoice Form

const styles = {
  Paper: {
    padding: 16,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
  },
}

const InvoiceFormComponent = props => {
  const { onSubmit, handleSubmit } = props
  return (
    <Paper zDepth={2} style={styles.Paper}>
      <form onSubmit={onSubmit}>
        <InvoiceFormDetailsSection />
        <FormSection name="customer">
          <CustomerFormSection />
        </FormSection>
        <FormSection name="items">
          <ItemsFormSection />
        </FormSection>
        <FormSection name="payment">
          <PaymentFormSection />
        </FormSection>
        <RaisedButton primary label="Next" onTouchTap={handleSubmit} />
      </form>
    </Paper>
  )
}

export default reduxForm({
  form: 'Invoices', //Form name is same
  validate,
})(InvoiceFormComponent)
