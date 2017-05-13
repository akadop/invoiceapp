import { Card, CardHeader, CardText } from 'material-ui/Card'
import { DatePicker, SelectField, TextField } from 'redux-form-material-ui'

import { Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'

const InvoiceFormDetails = () => (
  <Card>
    <CardHeader
      title="Order Details"
      subtitle="Misc. details regarding the invoice. Click anywhere here to expand this section."
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable>
      <Field
        floatingLabelText="The Store Location"
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
        underlineShow={false}
        fullWidth
      />
      <Field
        name="scheduleDate"
        component={DatePicker}
        fullWidth
        floatingLabelText="Scheduled Install Date"
        format={(value, name) =>
          value === ''
            ? null
            : typeof value === 'string' ? new Date(value) : value}
      />
    </CardText>
  </Card>
)

export default InvoiceFormDetails
