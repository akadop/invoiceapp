import { Card, CardHeader, CardText, MenuItem } from 'material-ui'
import { DatePicker, SelectField, TextField } from 'redux-form-material-ui'

import { Field } from 'redux-form'

const style = {
  marginLeft: 20,
  width: 'calc(100% - 20px)',
}

const InvoiceFormDetails = () => (
  <Card initiallyExpanded={true}>
    <CardHeader
      title="Order Details"
      subtitle="Misc. details regarding the invoice. Click anywhere here to expand this section."
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable>
      <Field
        floatingLabelText="Store Location"
        hintText="Store Location"
        name="storeName"
        component={SelectField}
        underlineShow={false}
        fullWidth
      >
        <MenuItem value="Dallas" primaryText="Dallas" />
        <MenuItem value="Arlington" primaryText="Arlington" />
        <MenuItem value="Houston" primaryText="Houston" />
      </Field>
      <Field
        name="installer"
        component={TextField}
        floatingLabelText="Installer"
        hintText="Installer"
        underlineShow={false}
        style={style}
        fullWidth
      />
      <Field
        name="scheduleDate"
        component={DatePicker}
        fullWidth
        style={{ ...style, marginBottom: 16, marginTop: 16 }}
        floatingLabelText="Scheduled Install Date"
        hintText="Scheduled Install Date"
        underlineShow={false}
        format={(value, name) =>
          value === ''
            ? null
            : typeof value === 'string' ? new Date(value) : value}
      />
    </CardText>
  </Card>
)

export default InvoiceFormDetails
