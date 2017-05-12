import { FormSection, reduxForm } from 'redux-form'

import CustomerFormSection from './CustomerFormSection'
import ItemsFormSection from './ItemsFormSection'
import Paper from 'material-ui/Paper'
import PaymentFormSection from './PaymentFormSection'
import PropTypes from 'prop-types'
import { PureComponent } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import validate from '../../lib/util/validate'

// Invoice Form

const styles = {
  Paper: {
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
  },
}

class SecondInvoiceContainer extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { onSubmit, handleSubmit } = this.props
    return (
      <Paper zDepth={2} style={styles.Paper}>
        <form onSubmit={onSubmit}>
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
}

export default reduxForm({
  form: 'Invoices', //Form name is same
  validate,
})(SecondInvoiceContainer)

SecondInvoiceContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
