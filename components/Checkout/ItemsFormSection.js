import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import { Field, FieldArray } from 'redux-form'
import { List, ListItem } from 'material-ui/List'
import { SelectField, TextField } from 'redux-form-material-ui'

import ContentAdd from 'material-ui/svg-icons/content/add'
import Divider from 'material-ui/Divider'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

const renderItems = ({ fields, meta: { error } }) => (
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
      <Card style={{ marginBottom: 16 }} key={index}>
        <CardHeader
          title={'Invoice Item #' + `${index + 1}`}
          subtitle="Make sure to fill all the fields."
        />
        <CardText>
          <Field
            hintText="Flooring or Padding"
            name={`${item}.itemType`}
            component={SelectField}
            underlineShow={false}
            fullWidth
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
            hintText="Item Reference Number"
            name={`${item}.refNumber`}
            component={TextField}
            underlineShow={false}
            fullWidth
          />
          <Field
            hintText="Color"
            name={`${item}.color`}
            component={TextField}
            underlineShow={false}
          />
          <Field
            hintText="Length (dimension)"
            name={`${item}.dimensionLength`}
            component={TextField}
            underlineShow={false}
          />
          <Field
            hintText="Width (dimension)"
            name={`${item}.dimensionWidth`}
            component={TextField}
            underlineShow={false}
          />
          <Divider />
          <Field
            hintText="Unit Price"
            name={`${item}.unitPrice`}
            component={TextField}
            underlineShow={false}
          />
          <Field
            hintText="Estimated Quantity"
            name={`${item}.estimatedQuantity`}
            component={TextField}
            underlineShow={false}
          />
          <Field
            hintText="Final Quantity"
            name={`${item}.finalQuantity`}
            component={TextField}
            underlineShow={false}
          />
          <Field
            hintText="Extended Price"
            name={`${item}.extendedPrice`}
            component={TextField}
            underlineShow={false}
          />
          <Field
            hintText="Estimated Total"
            name={`${item}.estimatedTotal`}
            component={TextField}
            underlineShow={false}
          />
          <CardActions>
            <RaisedButton
              backgroundColor="#EF4836"
              labelColor="#FFF"
              label="Remove"
              onTouchTap={() => fields.remove(index)}
            />
          </CardActions>
        </CardText>
      </Card>
    ))}
  </List>
)

const ItemsFormSection = () => (
  <FieldArray name="items" component={renderItems} />
)

export default ItemsFormSection
