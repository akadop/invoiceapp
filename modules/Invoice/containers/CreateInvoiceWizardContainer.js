import { Field, reduxForm } from 'redux-form'

import Box from 'custom-grommet-package'
import { Component } from 'react'
import InvoiceWizardFormCustomers
  from '../components/InvoiceWizardFormCustomers'
import InvoiceWizardFormItems from '../components/InvoiceWizardFormItems'
import InvoiceWizardFormPayment from '../components/InvoiceWizardFormPayment'
import NavControl from '../../Layout/NavControl'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class CreateInvoiceWizardContainer extends Component {
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
      <div>
        {page === 1 && <InvoiceWizardFormCustomers onSubmit={this.nextPage} />}
        {page === 2 &&
          <InvoiceWizardFormItems
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />}
        {page === 3 &&
          <InvoiceWizardFormPayment
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />}
      </div>
    )
  }
}

CreateInvoiceWizardContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default CreateInvoiceWizardContainer
