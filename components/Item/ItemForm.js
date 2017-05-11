import {
  Card,
  Divider,
  List,
  ListItem,
  MenuItem,
  Paper,
  RaisedButton,
} from 'material-ui'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { SelectField, TextField } from 'redux-form-material-ui'

import validate from '../../lib/util/validate'

const style = {
  marginLeft: 20,
}

const renderItems = ({ fields, meta: { error, submitFailed } }) => (
  <Paper>
    <RaisedButton
      secondary
      label="Add an Item"
      onTouchTap={() => fields.push({})}
    />
    <Divider />
    {fields.map((item, index) => (
      <ListItem style={{ marginBottom: 20, border: 1 }}>
        <Field
          floatingLabelText="Flooring or Padding"
          name={`${item}.itemType`}
          underlineShow={false}
          component={SelectField}
          style={style}
        >
          <MenuItem value="Flooring" primaryText="Flooring" />
          <MenuItem value="Pad" primaryText="Pad" />
        </Field>
        <Divider />
        <Field
          floatingLabelText="Item Reference Number"
          name={`${item}.refNumber`}
          underlineShow={false}
          component={TextField}
          style={style}
        />
        <Divider />
        <Field
          floatingLabelText="Color"
          name={`${item}.color`}
          underlineShow={false}
          component={TextField}
          style={style}
        />
        <Field
          floatingLabelText="Length (dimension)"
          name={`${item}.dimensionLength`}
          underlineShow={false}
          component={TextField}
          style={style}
        />
        <Field
          floatingLabelText="Width (dimension)"
          name={`${item}.dimensionWidth`}
          underlineShow={false}
          component={TextField}
          style={style}
        />
        <Field
          floatingLabelText="Unit Price"
          name={`${item}.unitPrice`}
          underlineShow={false}
          component={TextField}
          style={style}
        />
        <Field
          floatingLabelText="Estimated Quantity"
          name={`${item}.estimatedQuantity`}
          underlineShow={false}
          component={TextField}
          style={style}
        />
        <Field
          floatingLabelText="Estimated Total"
          name={`${item}.estimatedTotal`}
          underlineShow={false}
          component={TextField}
          style={style}
        />
        <Field
          floatingLabelText="Extended Price"
          name={`${item}.extendedPrice`}
          underlineShow={false}
          component={TextField}
          style={style}
        />
      </ListItem>
    ))}
  </Paper>
)

const MaterialItems = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <List>
        <FieldArray name="items" component={renderItems} />
      </List>
      <RaisedButton
        primary
        label="submit"
        type="submit"
        onTouchTap={handleSubmit}
      />
    </form>
  )
}

export default reduxForm({
  form: 'itemForm', //Form name is same
})(MaterialItems)
