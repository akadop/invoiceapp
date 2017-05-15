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
      marginTop: '300px',
      transform: 'translate3d(0, -50%, 0)',
      paddingTop: '20px',
      backgroundColor: '#FAFAFA',
    }}
    zDepth={1}
  >
    <section style={{ position: 'relative', margin: '15px', height: '128px' }}>
      <KeyIcon
        width="128px"
        height="128px"
        display="block"
        margin="0 auto"
        style={{
          position: 'absolute',
          right: '40%',
          top: '0%',
          fill: theme.palette.primary1Color,
        }}
        transform="rotateY(180deg)"
      />
      <KeyIcon
        width="128px"
        height="128px"
        display="block"
        margin="0 auto"
        style={{
          position: 'absolute',
          left: '40%',
          top: '0%',
          fill: theme.palette.accent1Color,
        }}
      />
    </section>
    <Paper zDepth={1}>
      <form>
        <Field
          id="email"
          hintText="Email Address"
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
          hintText="Password"
          floatingLabelText="Password"
          style={{ marginLeft: '20px' }}
          component={TextField}
          underlineShow={false}
          name="password"
          validate={[required]}
        />
        <Divider />
      </form>
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
    </Paper>
  </Paper>
)
