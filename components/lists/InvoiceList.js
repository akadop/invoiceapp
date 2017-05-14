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

// use allInvoices query and sort the data into a table

export default ({ data: { allInvoices = [] } }) => {
  const mapInvoices = map(
    ({
      id,
      createdAt,
      customer,
      _itemsMeta,
      payment,
      scheduleDate,
      storeName,
    }) => (
      <TableRow key={id} hoverable={true}>
        <TableRowColumn>{id}</TableRowColumn>
        <TableRowColumn>{createdAt}</TableRowColumn>
        <TableRowColumn>{storeName}</TableRowColumn>
        <TableRowColumn>{scheduleDate}</TableRowColumn>
        <TableRowColumn>
          {customer.lastName}, {customer.firstName}
        </TableRowColumn>
        <TableRowColumn>{_itemsMeta.count}</TableRowColumn>
        <TableRowColumn>{payment.balance}</TableRowColumn>
      </TableRow>
    )
  )

  return (
    <Paper zDepth={1} style={{ margin: 20 }}>
      <Table selectable={false} showRowHover={true}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Invoice ID</TableHeaderColumn>
            <TableHeaderColumn>Created</TableHeaderColumn>
            <TableHeaderColumn>Store Location</TableHeaderColumn>
            <TableHeaderColumn>Install Schedule Date</TableHeaderColumn>
            <TableHeaderColumn>Customer</TableHeaderColumn>
            <TableHeaderColumn># Items Ordered</TableHeaderColumn>
            <TableHeaderColumn>Balance</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mapInvoices(allInvoices)}
        </TableBody>
      </Table>

    </Paper>
  )
}
