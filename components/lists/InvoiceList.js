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
import List from 'material-ui/svg-icons/action/list'
import { map } from 'ramda'

// use allInvoices query and sort the data into a table

export default ({
  actions: { openInvoiceDialog, selectInvoice },
  selectedInvoice,
  invoiceDialogOpened,
  data: { allInvoices = [] },
}) => {
  const mapInvoices = map(
    ({ id, createdAt, customer, items, payment, scheduleDate, storeName }) =>
      <TableRow key={id}>
        <TableRowColumn>
          {createdAt}
        </TableRowColumn>
        <TableRowColumn>
          {customer.lastName}, {customer.firstName}
        </TableRowColumn>
        <TableRowColumn>
          {storeName}
        </TableRowColumn>
        <TableRowColumn>
          {payment.paymentBy}
        </TableRowColumn>
        <TableRowColumn>
          <RaisedButton
            backgroundColor="#03A9F4"
            labelColor="#fff"
            icon={<List />}
            label="view details"
            onTouchTap={() => {
              selectInvoice({
                selectedInvoice: id,
              }), openInvoiceDialog()
            }}
          />
        </TableRowColumn>
      </TableRow>
  )

  return (
    <Paper zDepth={3} style={{ margin: 20 }}>
      <Table
        selectable={false}
        showRowHover={true}
        fixedHeader={true}
        maxHeight="300px"
      >
        <TableHeader adjustForCheckbox>
          <TableRow>
            <TableHeaderColumn colSpan="3" tooltip="Created At">
              Created
            </TableHeaderColumn>
            <TableHeaderColumn colSpan="3" tooltip="Customer Name">
              Customer
            </TableHeaderColumn>
            <TableHeaderColumn
              colSpan="3"
              tooltip="store location order placed at"
            >
              Store Location
            </TableHeaderColumn>
            <TableHeaderColumn colSpan="3" tooltip="customer's payment method">
              Paid with
            </TableHeaderColumn>
            <TableHeaderColumn colSpan="3" tooltip="view full invoice">
              Full Invoice
            </TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody showRowHover={true}>
          {mapInvoices(allInvoices)}
        </TableBody>
      </Table>
      <InvoiceDialogContainer />
    </Paper>
  )
}
