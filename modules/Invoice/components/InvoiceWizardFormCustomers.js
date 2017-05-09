import {
	Box,
	Button,
	Footer,
	Form,
	FormField,
	FormFields,
	Label,
	TextInput,
} from 'custom-grommet-package'
import { Field, reduxForm } from 'redux-form'

import renderField from '../util/renderField'
import validate from '../util/validate'

const InvoiceWizardFormCustomers = props => {
	const { handleSubmit } = props
	return (
		<Form onSubmit={handleSubmit}>
			<Label uppercase={true}>New Invoice: Customer Information</Label>
			<FormFields>
				<Field name="firstName" component={renderField} label="First Name" />
				<Field name="lastName" component={renderField} label="Last Name" />
				<Field name="email" component={renderField} label="Email" />
				<Field name="address" component={renderField} label="Address" />
				<Field name="addressCity" component={renderField} label="City" />
				<Field name="addressState" component={renderField} label="State" />
				<Field name="addressZip" component={renderField} label="Zipcode" />
				<Footer
					pad={{ between: 'small', vertical: 'medium' }}
					alignContent="center"
					justify="center"
					responsive={true}
				>
					<Button
						primary
						label="Next"
						type="submit"
						onClick={handleSubmit}
						disabled={submitting}
					/>
				</Footer>
			</FormFields>
		</Form>
	)
}

export default reduxForm({
	form: 'invoice', // <--- same form name
	destroyOnUnmount: false, // <--- preserve form data
	forceUnregisterOnUnmount: true, // <---- unregister fields on unmount
	validate,
})(InvoiceWizardFormCustomers)
