import {
  Divider,
  IconButton,
  IconMenu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui'

import ModeEditIcon from 'material-ui/svg-icons/editor/mode-edit'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import SecurityIcon from 'material-ui/svg-icons/hardware/security'
import { map } from 'ramda'

export default ({ data: { allUsers = [] } }) => {
  const mapUsers = map(
    ({ id, email, firstname, lastname, bob, _invoiceMeta, role }) => (
      <TableRow key={id} hoverable={true}>
        <TableRowColumn>{firstName}</TableRowColumn>
        <TableRowColumn>{lastName}</TableRowColumn>
        <TableRowColumn>{email}</TableRowColumn>
        <TableRowColumn>{_invoiceMeta}</TableRowColumn>
        <TableRowColumn>{role}</TableRowColumn>
        <TableRowColumn>
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          >
            <MenuItem leftIcon={<ModeEditIcon />} primaryText="Modify" />
            <Divider />
            <MenuItem leftIcon={<SecurityIcon />} primaryText="Remove" />
          </IconMenu>
        </TableRowColumn>
      </TableRow>
    )
  )

  return (
    <Paper zDepth={1} style={{ margin: 20 }}>
      <Table selectable={false} showRowHover={true}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>First Name</TableHeaderColumn>
            <TableHeaderColumn>Last Name</TableHeaderColumn>
            <TableHeaderColumn>E-mail</TableHeaderColumn>
            <TableHeaderColumn>Invoice Count</TableHeaderColumn>
            <TableHeaderColumn>Role</TableHeaderColumn>
            <TableHeaderColumn>Actions</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mapUsers(allUsers)}
        </TableBody>
      </Table>
    </Paper>
  )
}
