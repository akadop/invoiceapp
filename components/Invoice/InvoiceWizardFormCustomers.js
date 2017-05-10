import {
  Box,
  Button,
  Footer,
  Form,
  FormFields,
  Header,
  Label,
} from 'custom-grommet-package'
import { Field, reduxForm } from 'redux-form'

import NavControl from '../Layout/NavControl'
import renderTextField from './util/renderTextField'
import validate from './util/validate'

const HeaderNav = (
  <Header
    justify="start"
    size="large"
    pad={{ horizontal: 'medium', between: 'medium' }}
  >
    <NavControl name="Add Customer" />
  </Header>
)

const InvoiceWizardFormCustomers = props => {
  const { handleSubmit } = props
  return (
    <Box full="horizontal" size="full" responsive primary={true}>
      {HeaderNav}
      <Box align="center">
        <Label uppercase={true}>
          New Invoice: Customer Information
        </Label>
        <Form onSubmit={handleSubmit}>
          <FormFields>
            <Field
              name="firstName"
              component={renderTextField}
              label="First Name"
            />
            <Field
              name="lastName"
              component={renderTextField}
              label="Last Name"
            />
            <Field name="email" component={renderTextField} label="Email" />
            <Field name="address" component={renderTextField} label="Address" />
            <Field
              name="addressCity"
              component={renderTextField}
              label="City"
            />
            <Field
              name="addressState"
              component={renderTextField}
              label="State"
            />
            <Field
              name="addressZip"
              component={renderTextField}
              label="Zipcode"
            />
            <Footer
              pad={{ between: 'small', vertical: 'medium' }}
              alignContent="center"
              justify="center"
              responsive={true}
            >
              <Button
                primary
                label="Next"
                type="submit"
                onClick={handleSubmit}
              />
            </Footer>
          </FormFields>
        </Form>
      </Box>
    </Box>
  )
}

export default reduxForm({
  form: 'invoice', // <--- same form name
  destroyOnUnmount: false, // <--- preserve form data
  forceUnregisterOnUnmount: true, // <---- unregister fields on unmount
  validate,
})(InvoiceWizardFormCustomers)
