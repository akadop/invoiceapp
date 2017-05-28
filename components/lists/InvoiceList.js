import {
  Paper,
  RaisedButton,
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui'

import InvoiceDialogContainer from '../../containers/InvoiceDialogContainer'
import { map } from 'ramda'

// use allInvoices query and sort the data into a table

export default ({
  actions: { openInvoiceDialog, selectInvoice },
  selectedInvoice,
  data: { allInvoices = [] },
}) => {
  const mapInvoices = map(
    ({ id, createdAt, customer, items, payment, scheduleDate, storeName }) => (
      <TableRow key={id} hoverable={true}>
        <TableRowColumn>{createdAt}</TableRowColumn>
        <TableRowColumn>{storeName}</TableRowColumn>
        <TableRowColumn>{payment.paymentBy}</TableRowColumn>
        <TableRowColumn>
          {customer.lastName}, {customer.firstName}
        </TableRowColumn>
        <TableRowColumn>
          <RaisedButton
            secondary
            label="view details"
            onTouchTap={() => {
              selectInvoice({ selectedInvoice: id }), openInvoiceDialog()
            }}
          />
        </TableRowColumn>
      </TableRow>
    )
  )

  return (
    <Paper zDepth={2} style={{ margin: 20 }}>
      <Table selectable={false} showRowHover={false} stripedRows={true}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Created</TableHeaderColumn>
            <TableHeaderColumn>Store Location</TableHeaderColumn>
            <TableHeaderColumn>Paid with</TableHeaderColumn>
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
