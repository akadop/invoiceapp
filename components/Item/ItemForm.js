import {
  Card,
  CardActions,
  CardHeader,
  CardText,
  Divider,
  MenuItem,
  Paper,
  RaisedButton,
} from 'material-ui'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { SelectField, TextField } from 'redux-form-material-ui'

import validate from '../../lib/util/validate'

const style = {
  marginLeft: 20,
  marginRight: 20,
  align: 'center',
}

const renderItems = ({
  fields,
  handleExpandChange,
  meta: { error, submitFailed },
}) => (
  <Paper zDepth={0}>
    <RaisedButton
      secondary
      label="Add an Item"
      onTouchTap={() => fields.push({})}
    />
    {fields.map((item, index) => (
      <Card style={{ marginBottom: 20 }} key={index}>
        <CardHeader title={'Invoice Item #' + `${index + 1}`} />
        <CardText>
          <Field
            floatingLabelText="Flooring or Padding"
            name={`${item}.itemType`}
            component={SelectField}
            fullWidth
            style={style}
          >
            <MenuItem value="Flooring" primaryText="Flooring" />
            <MenuItem value="Pad" primaryText="Pad" />
          </Field>
          <Field
            floatingLabelText="Item Reference Number"
            name={`${item}.refNumber`}
            component={TextField}
            fullWidth
            underlineDisabledStyle
            style={style}
          />
          <Field
            floatingLabelText="Color"
            name={`${item}.color`}
            component={TextField}
            underlineDisabledStyle
            style={style}
          />
          <Field
            floatingLabelText="Length (dimension)"
            name={`${item}.dimensionLength`}
            component={TextField}
            underlineDisabledStyle
            style={style}
          />
          <Field
            floatingLabelText="Width (dimension)"
            name={`${item}.dimensionWidth`}
            component={TextField}
            underlineDisabledStyle
            style={style}
          />
          <Field
            floatingLabelText="Unit Price"
            name={`${item}.unitPrice`}
            component={TextField}
            style={style}
          />
          <Field
            floatingLabelText="Estimated Quantity"
            name={`${item}.estimatedQuantity`}
            component={TextField}
            underlineDisabledStyle
            style={style}
          />
          <Field
            floatingLabelText="Estimated Total"
            name={`${item}.estimatedTotal`}
            component={TextField}
            underlineDisabledStyle
            style={style}
          />
          <Field
            floatingLabelText="Extended Price"
            name={`${item}.extendedPrice`}
            component={TextField}
            underlineDisabledStyle
            style={style}
          />
          <CardActions>
            <RaisedButton
              backgroundColor="#EF4836"
              labelColor="#FFF"
              label="Remove"
              onTouchTap={() => fields.remove(index)}
            />
          </CardActions>
        </CardText>
      </Card>
    ))}
  </Paper>
)

const MaterialItems = props => {
  const { handleSubmit, handleExpandChange } = props
  return (
    <form onSubmit={handleSubmit}>
      <FieldArray name="items" component={renderItems} />
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
