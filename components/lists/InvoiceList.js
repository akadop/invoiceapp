import {
  Paper,
  RaisedButton,
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui'

import InvoiceDialogContainer from '../../containers/InvoiceDialogContainer'
import List from 'material-ui/svg-icons/action/list'

// use allInvoices query and sort the data into a table

export default ({
  actions: { selectInvoice },
  data: { allInvoices = [] },
  selectedInvoice,
  invoiceDialogOpened
}) => {
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
          {allInvoices.map((invoice, id) => (
            <TableRow key={invoice.id}>
              <TableRowColumn>{invoice.createdAt}</TableRowColumn>

              <TableRowColumn>
                {invoice.customer.lastName},
                {invoice.customer.firstName}
              </TableRowColumn>

              <TableRowColumn>{invoice.storeName}</TableRowColumn>

              <TableRowColumn>{invoice.payment.paymentBy}</TableRowColumn>

              <TableRowColumn>
                <RaisedButton
                  backgroundColor="#03A9F4"
                  labelColor="#fff"
                  icon={<List />}
                  label="view details"
                  onTouchTap={() => {
                    selectInvoice({ selectedInvoice: invoice.id })
                  }}
                />
              </TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {invoiceDialogOpened && selectedInvoice ? (
        <InvoiceDialogContainer />
      ) : (
        <div />
      )}
    </Paper>
  )
}
