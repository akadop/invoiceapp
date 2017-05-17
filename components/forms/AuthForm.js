import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardText,
  CardTitle,
  Divider,
  FlatButton,
  Paper,
  RaisedButton,
} from 'material-ui'
import { email, required } from '../../lib/util/validators'

import { Field } from 'redux-form'
import KeyIcon from '../icons/KeyIcon'
import LockIcon from 'material-ui/svg-icons/action/lock'
import { TextField } from 'redux-form-material-ui'
import { fade } from 'material-ui/utils/colorManipulator'
import theme from '../../lib/hocs/theme'

export default ({ actions: { login }, submitting, isLoading }) => (
  <Paper
    style={{
      margin: '0 auto',
      minWidth: '300px',
      width: '33%',
      marginTop: '150px',
      backgroundColor: '#FFF',
    }}
    zDepth={2}
  >
    <form>
      <Field
        id="email"
        hintText="Email Address"
        fullWidth
        floatingLabelText="Email Address"
        style={{ marginLeft: '20px' }}
        component={TextField}
        underlineShow={false}
        name="email"
        validate={[email, required]}
      />
      <Divider />
      <Field
        id="password"
        type="password"
        fullWidth
        hintText="Password"
        floatingLabelText="Password"
        style={{ marginLeft: '20px' }}
        component={TextField}
        underlineShow={false}
        name="password"
        validate={[required]}
      />
      <Divider />
      <RaisedButton
        disabled={submitting || isLoading}
        label="Login"
        style={{ width: '100%' }}
        primary={true}
        keyboardFocused={true}
        labelPosition="after"
        icon={<LockIcon />}
        onTouchTap={login}
      />
    </form>
  </Paper>
)
