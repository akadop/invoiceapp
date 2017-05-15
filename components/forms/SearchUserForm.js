import { Divider, Paper, RaisedButton } from 'material-ui'

import { Field } from 'redux-form'
import SearchIcon from 'material-ui/svg-icons/action/search'
import { TextField } from 'redux-form-material-ui'
import theme from '../../universal/utils/theme'

export default ({ actions: { searchUser } }) => (
  <Paper
    zDepth={2}
    style={{
      background: theme.palette.dark2Color,
      position: 'relative',
      color: 'black',
      height: 58,
      borderBottom: `5px solid ${theme.palette.accent1Color}`,
    }}
  >
    <Field
      id="search"
      hintText="Search Users"
      name="name"
      style={{ marginLeft: '20px' }}
      underlineShow={false}
      component={TextField}
    />
    <RaisedButton
      primary={true}
      labelPosition="after"
      icon={<SearchIcon />}
      label="Search Again"
      onTouchTap={searchUser}
      style={{ position: 'absolute', right: '0', height: 53 }}
    />
  </Paper>
)
