import Checkbox from 'material-ui/Checkbox'

const renderCheckbox = props => (
  <Checkbox
    label={props.label}
    checked={props.value ? true : false}
    onCheck={props.onChange}
  />
)

export default renderCheckbox
