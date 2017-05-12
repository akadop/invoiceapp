import { Card, CardHeader, CardText } from 'material-ui/Card'
import { DatePicker, SelectField, TextField } from 'redux-form-material-ui'

import Field from 'redux-form'
import MenuItem from 'material-ui/MenuItem'

const InvoiceMiscDetailsSection = () => {
  return (
    <Card>
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
          underlineShow={false}
        />
      </CardText>
    </Card>
  )
}

export default InvoiceMiscDetailsSection
