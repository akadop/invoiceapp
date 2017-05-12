import { Card, CardHeader, CardText } from 'material-ui/Card'
import { DatePicker, SelectField, TextField } from 'redux-form-material-ui'

import { Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'

const styles = {
  marginBottom: 8,
  marginTop: 8,
}

const InvoiceFormDetailsSection = () => (
  <Card style={styles}>
    <CardHeader
      title="Additional Details"
      subtitle="Misc. details regarding the invoice"
    />
    <CardText>
      <Field
        hintText="The Store Location"
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
        hintText="Installer"
        underlineShow={false}
      />
      <Field
        name="scheduleDate"
        component={DatePicker}
        hintText="Scheduled Install Date"
        format={(value, name) =>
          value === ''
            ? null
            : typeof value === 'string' ? new Date(value) : value}
      />
    </CardText>
  </Card>
)

export default InvoiceFormDetailsSection
