import { FormSection, reduxForm } from 'redux-form'

import CustomerFormSection from './CustomerFormSection'
import InvoiceFormDetails from './InvoiceFormDetails'
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
  RaisedButton: {
    width: '100%',
  },
}

const InvoiceFormComponent = props => {
  const { onSubmit, handleSubmit } = props
  return (
    <Paper zDepth={1} style={styles.Paper}>
      <form onSubmit={onSubmit}>
        <FormSection name="customer">
          <CustomerFormSection />
        </FormSection>
        <section style={{ marginTop: 8, marginBottom: 8 }}>
          <InvoiceFormDetails />
        </section>
        <FormSection name="payment">
          <PaymentFormSection />
        </FormSection>
        <ItemsFormSection />
        <RaisedButton
          primary
          label="Next"
          onTouchTap={handleSubmit}
          style={styles.RaisedButton}
        />
      </form>
    </Paper>
  )
}

export default reduxForm({
  form: 'Invoices', //Form name is same
  validate,
})(InvoiceFormComponent)
