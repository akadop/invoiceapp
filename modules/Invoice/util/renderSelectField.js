import { FormField, Select } from 'custom-grommet-package'

const renderSelectField = ({
	input,
	label,
	meta: { touched, error },
	children,
	...custom
}) => (
	<FormField help={label} error={touched && error}>
		<Select
			placeHolder="Choose A Product Type"
			onChange={(event, index, value) => input.onChange(value)}
			{...input}
			{...custom}
		/>
	</FormField>
)

export default renderSelectField
