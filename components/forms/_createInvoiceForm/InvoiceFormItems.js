import {
  Card,
  CardActions,
  CardHeader,
  CardText,
  Divider,
  FloatingActionButton,
  List,
  ListItem,
  MenuItem,
  Paper,
  RaisedButton,
} from 'material-ui'
import { Field, FieldArray } from 'redux-form'
import { SelectField, TextField } from 'redux-form-material-ui'

import ContentAdd from 'material-ui/svg-icons/content/add'

const renderItems = ({ fields, meta: { error }, props }) => {
  const style = {
    marginLeft: 20,
    width: 'calc(100% - 20px)',
  }
  return (
    <List>
      <ListItem>
        <FloatingActionButton
          secondary
          label="Add an Item"
          onTouchTap={() => fields.push({})}
          style={{ marginBottom: 8 }}
        >
          <ContentAdd />
        </FloatingActionButton>
      </ListItem>

      {fields.map((item, index) => (
        <Card key={index} initiallyExpanded={true}>
          <CardHeader
            title={'Invoice Item #' + `${index + 1}`}
            subtitle="Item Type has multiple fields, allowing you to pick a specific type of pad if it's not a flooring product item."
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable>
            <Field
              floatingLabelText="Flooring or Padding"
              hintText="Flooring or Padding"
              name={`${item}.itemType`}
              style={style}
              component={SelectField}
              underlineShow={false}
              fullWidth
              errorText="This information is required (this message does not disappear)"
            >
              <MenuItem value="FLOORING" primaryText="Flooring" />
              <MenuItem value="APPLIANCES_PAD" primaryText="Pad: Appliances" />
              <MenuItem
                value="INSTALLATION_PAD"
                primaryText="Pad: Installation"
              />
              <MenuItem value="METAL_PAD" primaryText="Pad: Metal" />

              <MenuItem value="OTHER_PAD" primaryText="Pad: Other" />
              <MenuItem
                value="PIANOPOOLTABLE_PAD"
                primaryText="Pad: Piano Pool Table"
              />
              <MenuItem value="STEPS_PAD" primaryText="Pad: Steps" />
              <MenuItem value="TAKEUP_PAD" primaryText="Pad: Take Up" />
            </Field>
            <Field
              floatingLabelText="Item Reference Number"
              hintText="Item Reference Number"
              name={`${item}.refNumber`}
              component={TextField}
              style={style}
              underlineShow={false}
              fullWidth
            />
            <Divider />
            <Field
              floatingLabelText="Color"
              hintText="Color"
              name={`${item}.color`}
              component={TextField}
              style={style}
              underlineShow={false}
              fullWidth
            />
            <Field
              floatingLabelText="Length (dimension)"
              hintText="Length (dimension)"
              name={`${item}.dimensionLength`}
              component={TextField}
              style={style}
              underlineShow={false}
            />
            <Field
              floatingLabelText="Width (dimension)"
              hintText="Width (dimension)"
              name={`${item}.dimensionWidth`}
              component={TextField}
              style={style}
              underlineShow={false}
            />
            <Field
              floatingLabelText="Unit Price"
              hintText="Unit Price"
              name={`${item}.unitPrice`}
              component={TextField}
              style={style}
              underlineShow={false}
            />
            <Divider />
            <Field
              floatingLabelText="Estimated Quantity"
              hintText="Estimated Quantity"
              name={`${item}.estimatedQuantity`}
              component={TextField}
              style={style}
              underlineShow={false}
            />
            <Field
              floatingLabelText="Final Quantity"
              hintText="Final Quantity"
              name={`${item}.finalQuantity`}
              component={TextField}
              style={style}
              underlineShow={false}
            />
            <Field
              floatingLabelText="Extended Price"
              hintText="Extended Price"
              name={`${item}.extendedPrice`}
              component={TextField}
              style={style}
              underlineShow={false}
            />
            <Field
              floatingLabelText="Estimated Total"
              hintText="Estimated Total"
              name={`${item}.estimatedTotal`}
              component={TextField}
              style={style}
              underlineShow={false}
            />
            <CardActions>
              <RaisedButton
                backgroundColor="#EF4836"
                labelColor="#FFF"
                label="Remove"
                onTouchTap={() => fields.remove(index)}
                style={{
                  display: 'flex',
                  justify: 'center',
                }}
              />
            </CardActions>
          </CardText>
        </Card>
      ))}
    </List>
  )
}

const InvoiceFormItems = () => (
  <FieldArray name="items" component={renderItems} />
)

export default InvoiceFormItems
