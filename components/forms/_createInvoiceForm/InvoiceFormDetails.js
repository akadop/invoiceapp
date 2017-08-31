import { DatePicker, SelectField, TextField } from 'redux-form-material-ui'
import { Divider, MenuItem } from 'material-ui'

import { Field } from 'redux-form'

const style = {
  marginLeft: 20,
  width: 'calc(100% - 20px)'
}

const InvoiceFormDetails = () => (
  <div>
    <Field
      floatingLabelText="Store Location"
      hintText="Store Location"
      name="storeName"
      component={SelectField}
      underlineShow={false}
      style={style}
      fullWidth
    >
      <MenuItem value="Dallas" primaryText="Dallas" />
      <MenuItem value="Arlington" primaryText="Arlington" />
      <MenuItem value="Houston" primaryText="Houston" />
    </Field>
    <Divider />
    <Field
      component={TextField}
      floatingLabelText="Installer"
      fullWidth
      hintText="Installer"
      name="installer"
      style={style}
      underlineShow={false}
    />
    <Divider />
    <Field
      component={DatePicker}
      floatingLabelText="Scheduled Install Date"
      fullWidth
      hintText="Scheduled Install Date"
      name="scheduleDate"
      style={{ ...style, marginBottom: 16, marginTop: 16 }}
      underlineShow={false}
      format={(value, name) =>
        value === ''
          ? null
          : typeof value === 'string' ? new Date(value) : value}
    />
  </div>
)

export default InvoiceFormDetails
