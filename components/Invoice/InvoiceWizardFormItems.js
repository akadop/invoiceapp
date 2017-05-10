import {
  Box,
  Button,
  Columns,
  Footer,
  Form,
  FormFields,
  Label,
  Section,
} from 'custom-grommet-package'
import { Field, FieldArray, reduxForm } from 'redux-form'

import renderSelectField from './util/renderSelectField'
import renderTextField from './util/renderTextField'
import validate from './util/validate'

const SelectItemType = ['Flooring Item', 'Pad']

const renderItems = ({ fields, meta: { error, submitFailed } }) => (
  <Box>
    <Button type="button" label="Add an Item" onClick={() => fields.push({})} />
    {fields.map((item, index) => (
      <Columns justify="center" size="medium" maxCount={3}>
        <Button
          critical
          fill
          type="button"
          label="Remove"
          onClick={() => fields.remove(index)}
        />
        <Box>
          <FormFields>
            <Field
              name={`${item}.itemType`}
              type="select"
              component={renderSelectField}
              label="Item Type"
              options={SelectItemType}
            />
            <Field
              name={`${item}.refNumber`}
              type="text"
              component={renderTextField}
              label="Item Reference Number"
            />
          </FormFields>
        </Box>
        <Box>
          <FormFields>
            <Field
              name={`${item}.color`}
              type="text"
              component={renderTextField}
              label="Item Color"
            />
            <Field
              name={`${item}.dimensionLength`}
              type="number"
              component={renderTextField}
              label="Item Length"
            />
            <Field
              name={`${item}.dimensionWidth`}
              type="number"
              component={renderTextField}
              label="Item Width"
            />
          </FormFields>
        </Box>
        <Box>
          <FormFields>
            <Field
              name={`${item}.unitPrice`}
              type="number"
              component={renderTextField}
              label="Unit Price"
            />
            <Field
              name={`${item}.estimatedQuantity`}
              type="number"
              component={renderTextField}
              label="Estimated Quantity"
            />
            <Field
              name={`${item}.estimatedTotal`}
              type="number"
              component={renderTextField}
              label="Estimated Total"
            />
            <Field
              name={`${item}.extendedPrice`}
              type="number"
              component={renderTextField}
              label="Extended Price"
            />
          </FormFields>
        </Box>
      </Columns>
    ))}
  </Box>
)

const InvoiceWizardFormCustomers = props => {
  const { handleSubmit, reset, previousPage } = props
  return (
    <Box primary={true} align="center">
      <Form onSubmit={handleSubmit} compact>
        <FieldArray name="items" component={renderItems} />
      </Form>
      <Footer
        pad={{ between: 'small', vertical: 'medium' }}
        alignContent="center"
        justify="center"
        responsive={true}
      >
        <Button secondary label="Back" type="button" onClick={previousPage} />
        <Button primary label="Next" type="submit" onClick={handleSubmit} />
      </Footer>
    </Box>
  )
}

export default reduxForm({
  form: 'invoice', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(InvoiceWizardFormCustomers)
