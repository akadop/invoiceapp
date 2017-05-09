import { FormField, TextInput } from 'custom-grommet-package'

// Creating a custom redux form text field with a different appearance to the standard
// html form field.

const renderTextField = ({ input, label, type, meta: { touched, error } }) => {
	return (
		<FormField help={label} htmlFor={label} error={touched && error} {...input}>
			<TextInput {...input} />
		</FormField>
	)
}

export default renderTextField
