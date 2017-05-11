import SelectField from 'material-ui/SelectField'

const renderSelectField = props => (
  <SelectField
    floatingLabelText={props.label}
    errorText={props.touched && props.error}
    {...props}
    onChange={(event, index, value) => props.onChange(value)}
  />
)

export default renderSelectField
