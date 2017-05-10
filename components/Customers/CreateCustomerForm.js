import {
  Box,
  Button,
  Footer,
  Form,
  FormField,
  FormFields,
  Header,
  Label,
  TextInput,
} from 'custom-grommet-package'
import { Field, reduxForm } from 'redux-form'

import NavControl from '../Layout/NavControl'

const renderField = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <FormField help={label} htmlFor={label} error={touched && error} {...input}>
      <TextInput {...input} />
    </FormField>
  )
}

// header for this page
const HeaderNav = (
  <Header
    justify="start"
    size="large"
    pad={{ horizontal: 'medium', between: 'medium' }}
  >
    <NavControl name="Add Customer" />
  </Header>
)

// the redux form
const CustomerForm = props => {
  const { handleSubmit, submitting, onSubmit, reset, pristine } = props
  const errors = props.errors <= 0 ? null : renderErrors(props.errors)
  return (
    <Box full="horizontal" size="full" primary={true}>
      {HeaderNav}
      <Box align="center">
        <Box
          responsive={true}
          margin="small"
          pad={{ horizontal: 'medium', vertical: 'small' }}
        >
          <Label uppercase={true}>
            Create a new customer entry.
          </Label>
        </Box>
        <Form onSubmit={handleSubmit}>
          <FormFields>
            <Field
              name="firstName"
              component={renderField}
              label="First Name"
            />
            <Field name="lastName" component={renderField} label="Last Name" />
            <Field name="email" component={renderField} label="Email" />
            <Field name="address" component={renderField} label="Address" />
            <Field name="addressCity" component={renderField} label="City" />
            <Field name="addressState" component={renderField} label="State" />
            <Field name="addressZip" component={renderField} label="Zipcode" />
            <Footer
              pad={{ between: 'small', vertical: 'medium' }}
              alignContent="center"
              justify="center"
              responsive={true}
            >
              <Button
                primary
                label="Submit"
                type="submit"
                onClick={handleSubmit}
                disabled={submitting}
              />
            </Footer>
          </FormFields>
        </Form>
      </Box>
    </Box>
  )
}

// custom validation errors for each different field.

const validate = values => {
  const errors = {}

  if (!values.firstName) {
    errors.firstName = 'Please enter a first name'
  }

  if (!values.lastName) {
    errors.lastName = 'Please enter a last name'
  }

  if (
    !values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }

  if (!values.address) {
    errors.address = 'Please enter an address'
  }

  if (!values.addressCity) {
    errors.addressCity = 'Please enter a city'
  }

  if (!values.addressState) {
    errors.addressState = 'Please enter a state'
  }

  if (!values.addressZip) {
    errors.addressZip = 'Please enter a zip code'
  }

  return errors
}

// decorate the form component
export default reduxForm({
  form: 'customer', // a unique name for this form
  validate,
})(CustomerForm)
