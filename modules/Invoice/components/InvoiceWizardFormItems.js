import {
  Box,
  Button,
  Footer,
  Form,
  FormFields,
  Header,
  Heading,
  Label,
  Section,
  Tile,
  Tiles,
} from 'custom-grommet-package'
import { Field, FieldArray, reduxForm } from 'redux-form'

import NavControl from '../../Layout/NavControl'
import renderSelectField from '../util/renderSelectField'
import renderTextField from '../util/renderTextField'
import validate from '../util/validate'

const HeaderNav = (
  <Header
    justify="start"
    size="large"
    pad={{ horizontal: 'medium', between: 'medium' }}
  >
    <NavControl name="Items" />
  </Header>
)

const SelectItemType = ['Flooring Item', 'Pad']

const renderItems = ({ fields, meta: { error, submitFailed } }) => (
  <Tiles fill>
    <Button type="button" label="Add an Item" onClick={() => fields.push({})} />
    {fields.map((item, index) => (
      <Tile fill wide margin="small" responsive key={index}>
        <FormFields>
          <Heading tag="h4" strong={true} margin="none">
            Item #{index + 1}
          </Heading>
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
          <Button
            critical
            fill
            type="button"
            label="Remove"
            onClick={() => fields.remove(index)}
          />
        </FormFields>
      </Tile>
    ))}
  </Tiles>
)

const InvoiceWizardFormCustomers = props => {
  const { handleSubmit, reset, previousPage } = props
  return (
    <Box full size="full" responsive primary={true} align="center">
      {HeaderNav}
      <Form onSubmit={handleSubmit}>
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
