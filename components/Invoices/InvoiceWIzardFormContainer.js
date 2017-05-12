import { Component } from 'react'
import InvoiceWizardFormCustomers from './InvoiceWizardFormCustomers'
import InvoiceWizardFormItems from './InvoiceWizardFormItems'
import InvoiceWizardFormPayments from './InvoiceWizardFormPayments'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'

class InvoiceWizardFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
    }
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }
  render() {
    const { page } = this.state
    const { onSubmit } = this.props
    return (
      <Paper zDepth={2}>
        {page === 1 && <InvoiceWizardFormCustomers onSubmit={this.nextPage} />}
        {page === 2 &&
          <InvoiceWizardFormItems
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />}
        {page === 3 &&
          <InvoiceWizardFormPayments
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />}
      </Paper>
    )
  }
}

InvoiceWizardFormContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default InvoiceWizardFormContainer
