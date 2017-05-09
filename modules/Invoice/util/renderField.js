import { FormField, TextInput } from 'custom-grommet-package'

const renderField = ({ input, label, type, meta: { touched, error } }) => {
	return (
		<FormField help={label} htmlFor={label} error={touched && error} {...input}>
			<TextInput {...input} />
		</FormField>
	)
}

export default renderField
