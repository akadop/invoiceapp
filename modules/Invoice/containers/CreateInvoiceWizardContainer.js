import { Field, reduxForm } from 'redux-form'

import { Component } from 'react'
import NavControl from '../../Layout/NavControl'
import PropTypes from 'prop-types'

class CreateInvoiceWizardForm extends Component {
	constructor(props) {
		super(props)
		this.nextPage = this.nextPage.bind(this)
		this.previousPage = this.previousPage.bind(this)
		this.state = {
			page: 1,
		}
	}

	nextPage() {
		this.setState({ page: this.state.page + 1 })
	}

	previousPage() {
		this.setState({ page: this.state.page - 1 })
	}

	render() {
		return (
			<Section>
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

			</Section>
		)
	}
}

CreateInvoiceWizardForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
}

export default CreateInvoiceWizard
