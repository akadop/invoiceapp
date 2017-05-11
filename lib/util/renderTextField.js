import TextField from 'material-ui/TextField'

const renderTextField = props => (
  <TextField
    hintText={props.label}
    floatingLabelText={props.label}
    errorText={props.touched && props.error}
    {...props}
  />
)

export default renderTextField
