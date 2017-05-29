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

import { map } from 'ramda'

// use allInvoices query and sort the data into a table

export default ({
  actions: { openInvoiceDialog, selectInvoice, closeInvoiceDialog },
  selectedInvoice,
  invoiceDialogOpened,
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

  const styles = {
    InvoiceView: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
  }

  const actions = [
    <FlatButton label="Close" primary={true} onTouchTap={closeInvoiceDialog} />,
  ]

  const InvoiceDialog = () => {
    return (
      <div style={styles.InvoiceView}>
        <Dialog
          title="Invoice Details"
          actions={actions}
          modal={true}
          open={invoiceDialogOpened}
          onRequestClose={closeInvoiceDialog}
          background="#FAFAFA"
          contentStyle={{
            width: '85%',
            maxWidth: '1440px',
            transform: 'translate(0px, 32px)',
            textSize: '14px',
          }}
          titleStyle={{
            textAlign: 'center',
            borderBottom: '4px solid #ff4081',
          }}
        >
          <h4>Customer First Name:</h4>
          <p>{Invoice.customer.firstName}</p>
          <h4>Customer Last Name:</h4>
          <p>{Invoice.customer.lastName}</p>
        </Dialog>
      </div>
    )
  }

  return (
    <Paper zDepth={2} style={{ margin: 20 }}>
      <Table selectable={true} showRowHover={true}>
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
      <InvoiceDialog />
    </Paper>
  )
}
