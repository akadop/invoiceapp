import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import { Field, FieldArray } from 'redux-form'
import { List, ListItem } from 'material-ui/List'
import { SelectField, TextField } from 'redux-form-material-ui'

import ContentAdd from 'material-ui/svg-icons/content/add'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
  RaisedButton: {
    display: 'flex',
    justify: 'center',
  },
}

const renderItems = ({ fields, meta: { error }, props }) => {
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
        <Card style={{ marginBottom: 16 }} key={index} initiallyExpanded={true}>
          <CardHeader
            title={'Invoice Item #' + `${index + 1}`}
            subtitle="Item Type has multiple fields, allowing you to pick a specific type of pad if it's not a flooring product item."
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable>
            <Field
              floatingLabelText="Flooring or Padding"
              name={`${item}.itemType`}
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
              name={`${item}.refNumber`}
              component={TextField}
              underlineShow={false}
              fullWidth
            />
            <Field
              floatingLabelText="Color"
              name={`${item}.color`}
              component={TextField}
              underlineShow={false}
              fullWidth
            />
            <Field
              floatingLabelText="Length (dimension)"
              name={`${item}.dimensionLength`}
              component={TextField}
              underlineShow={false}
            />
            <Field
              floatingLabelText="Width (dimension)"
              name={`${item}.dimensionWidth`}
              component={TextField}
              underlineShow={false}
            />
            <Field
              floatingLabelText="Unit Price"
              name={`${item}.unitPrice`}
              component={TextField}
              underlineShow={false}
            />
            <Field
              floatingLabelText="Estimated Quantity"
              name={`${item}.estimatedQuantity`}
              component={TextField}
              underlineShow={false}
            />
            <Field
              floatingLabelText="Final Quantity"
              name={`${item}.finalQuantity`}
              component={TextField}
              underlineShow={false}
            />
            <Field
              floatingLabelText="Extended Price"
              name={`${item}.extendedPrice`}
              component={TextField}
              underlineShow={false}
            />
            <Field
              floatingLabelText="Estimated Total"
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
                style={styles.RaisedButton}
              />
            </CardActions>
          </CardText>
        </Card>
      ))}
    </List>
  )
}

const ItemsFormSection = () => (
  <FieldArray name="items" component={renderItems} />
)

export default ItemsFormSection
