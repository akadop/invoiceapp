import { Divider, Paper, RaisedButton } from 'material-ui'
import { email, required } from '../../lib/util/validators'

import { Field } from 'redux-form'
import LockIcon from 'material-ui/svg-icons/action/lock'
import { TextField } from 'redux-form-material-ui'

export default ({ actions: { login }, submitting, isLoading }) => (
  <div>
    <Paper
      style={{
        marginBottom: '1em'
      }}
    >
      <p
        style={{
          textAlign: 'center',
          paddingTop: '1em',
          paddingBottom: '1em'
        }}
      >
        Demo login information:
        <li>email: test@demo.com</li>
        <li>password: testdemo</li>
      </p>
    </Paper>
    <Paper
      style={{
        margin: '0 auto',
        alignSelf: 'center',
        minWidth: '400px',
        width: '40%',
        marginTop: '150px',
        backgroundColor: '#FFF'
      }}
      zDepth={2}
    >
      <form>
        <Field
          id="email"
          hintText="Email Address"
          fullWidth
          floatingLabelText="Email Address"
          style={{
            marginLeft: '20px'
          }}
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
          style={{
            marginLeft: '20px'
          }}
          component={TextField}
          underlineShow={false}
          name="password"
          validate={[required]}
        />
        <Divider />
        <RaisedButton
          disabled={submitting || isLoading}
          label="Login"
          style={{
            width: '100%'
          }}
          primary={true}
          keyboardFocused={true}
          labelPosition="after"
          icon={<LockIcon />}
          onTouchTap={login}
        />
      </form>
    </Paper>
  </div>
)
