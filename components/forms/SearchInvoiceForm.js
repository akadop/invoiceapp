import { Divider, Paper, RaisedButton } from 'material-ui'

import { Field } from 'redux-form'
import SearchIcon from 'material-ui/svg-icons/action/search'
import { TextField } from 'redux-form-material-ui'

// Search Invoices

export default ({ actions: { searchInvoice } }) => (
  <Paper
    zDepth={1}
    style={{
      background: theme.palette.dark2Color,
      position: 'relative',
      color: 'black',
      height: 58,
      borderBottom: `linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)`,
    }}
  >
    <Field
      id="search"
      hintText="Search Invoices"
      name="name"
      style={{ marginLeft: '16px', width: 'calc(90% - (130px + 20px))' }}
      underlineShow={false}
      component={TextField}
    />
    <RaisedButton
      primary={true}
      labelPosition="after"
      icon={<SearchIcon />}
      label="Search Again"
      onTouchTap={searchInvoice}
      style={{ position: 'absolute', right: '0', height: 53 }}
    />
  </Paper>
)
