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

import InvoiceDialogContainer from '../../containers/InvoiceDialogContainer'
import ModeEditIcon from 'material-ui/svg-icons/editor/mode-edit'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import SecurityIcon from 'material-ui/svg-icons/hardware/security'
import { map } from 'ramda'

// use allInvoices query and sort the data into a table

export default ({
  actions: { openInvoiceDialog, selectInvoice },
  data: { allInvoices = [] },
}) => {
  const mapInvoices = map(
    ({ id, createdAt, customer, items, payment, scheduleDate, storeName }) => (
      <TableRow key={id} hoverable={true}>
        <TableRowColumn>{createdAt}</TableRowColumn>
        <TableRowColumn>{storeName}</TableRowColumn>
        <TableRowColumn>{payment.paymentBy}</TableRowColumn>
        <TableRowColumn>{payment.balance}</TableRowColumn>
        <TableRowColumn>
          {customer.lastName}, {customer.firstName}
        </TableRowColumn>
        <TableRowColumn>
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            onTouchTap={() => {
              selectInvoice({ selectedInvoice: id })
              openInvoiceDialog()
            }}
          />
        </TableRowColumn>
      </TableRow>
    )
  )

  return (
    <Paper zDepth={2} style={{ margin: 20 }}>
      <Table selectable={false} showRowHover={true} stripedRows={true}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Created</TableHeaderColumn>
            <TableHeaderColumn>Store Location</TableHeaderColumn>
            <TableHeaderColumn>Paid with</TableHeaderColumn>
            <TableHeaderColumn>Balance</TableHeaderColumn>
            <TableHeaderColumn>Customer</TableHeaderColumn>
            <TableHeaderColumn>Full Invoice</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mapInvoices(allInvoices)}
        </TableBody>
      </Table>
      <InvoiceDialogContainer />
    </Paper>
  )
}
