import { Field, FieldArray, reduxForm } from 'redux-form'

import Button from 'custom-grommet-package/components/Box'
import Form from 'custom-grommet-package/components/Form'
import renderSelectField from './util/renderSelectField'
import renderTextField from './util/renderTextField'
import validate from './util/validate'

const SelectItemType = ['Flooring Item', 'Pad']

const renderItems = ({ fields, meta: { error, submitFailed } }) => (
  <div>
    <Button type="button" label="Add an Item" onClick={() => fields.push({})} />
    {fields.map((item, index) => (
      <fieldset>
        <Button
          critical
          fill
          type="button"
          label="Remove"
          onClick={() => fields.remove(index)}
        />
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
      </fieldset>
    ))}
  </div>
)

const InvoiceWizardFormCustomers = props => {
  const { handleSubmit, reset, previousPage } = props
  return (
    <Form onSubmit={handleSubmit} compact>
      <FieldArray name="items" component={renderItems} />
      <Button secondary label="Back" type="button" onClick={previousPage} />
      <Button primary label="Next" type="submit" onClick={handleSubmit} />
    </Form>
  )
}

export default reduxForm({
  form: 'invoice', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(InvoiceWizardFormCustomers)
