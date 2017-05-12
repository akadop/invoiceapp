import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { SelectField, TextField } from 'redux-form-material-ui'

import ContentAdd from 'material-ui/svg-icons/content/add'
import Divider from 'material-ui/Divider'
import FlatButton from 'material-ui/FlatButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import validate from '../../lib/util/validate'

const styles = {
  form: {
    display: 'inline-block',
    padding: 16,
  },
}

const renderItems = ({ fields, meta: { touched, error } }) => (
  <div>
    <FloatingActionButton
      secondary
      label="Add an Item"
      onTouchTap={() => fields.push({})}
      style={{ marginBottom: 8 }}
    >
      <ContentAdd />
    </FloatingActionButton>

    {fields.map((item, index) => (
      <Card style={{ marginBottom: 16 }} key={index}>

        <CardHeader
          title={'Invoice Item #' + `${index + 1}`}
          subtitle="Make sure to fill all the fields."
        />
        <CardText>

          <Field
            floatingLabelText="Flooring or Padding"
            name={`${item}.itemType`}
            component={SelectField}
            underlineShow={false}
            fullWidth
          >
            <MenuItem value="Flooring" primaryText="Flooring" />
            <MenuItem value="Pad" primaryText="Pad" />
          </Field>

          <Field
            floatingLabelText="Item Reference Number"
            name={`${item}.refNumber`}
            component={TextField}
            underlineShow={false}
            fullWidth
          />

          <Field
            floatingLabelText="Color"
            name={`${item}.color`}
            component={TextField}
            underlineShow={false}
          />

          <Field
            floatingLabelText="Length (dimension)"
            name={`${item}.dimensionLength`}
            component={TextField}
            underlineShow={false}
          />

          <Field
            floatingLabelText="Width (dimension)"
            name={`${item}.dimensionWidth`}
            component={TextField}
            underlineShow={false}
          />

          <Divider />

          <Field
            floatingLabelText="Unit Price"
            name={`${item}.unitPrice`}
            component={TextField}
            underlineShow={false}
          />

          <Field
            floatingLabelText="Estimated Quantity"
            name={`${item}.estimatedQuantity`}
            component={TextField}
            underlineShow={false}
          />

          <Field
            floatingLabelText="Extended Price"
            name={`${item}.extendedPrice`}
            component={TextField}
            underlineShow={false}
          />

          <Field
            floatingLabelText="Estimated Total"
            name={`${item}.estimatedTotal`}
            component={TextField}
            underlineShow={false}
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
  </div>
)

const InvoiceWizardFormItems = props => {
  const { handleSubmit, reset, previousPage } = props
  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <FieldArray name="items" component={renderItems} />
      <FlatButton secondary label="back" onTouchTap={previousPage} />
      <RaisedButton
        primary
        label="submit"
        type="Next"
        onTouchTap={handleSubmit}
      />
    </form>
  )
}

export default reduxForm({
  form: 'invoice', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(InvoiceWizardFormItems)
