import { Dialog, FlatButton, Paper } from 'material-ui'

export default ({
  data: { Invoice },
  invoiceDialogOpened,
  selectedInvoice,
  actions: { closeInvoiceDialog }
}) => {
  const actions = [
    <FlatButton label="Close" primary={true} onTouchTap={closeInvoiceDialog} />
  ]

  const styles = {
    InvoiceView: {
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'center'
    },
    contentStyle: {
      width: '85%',
      transform: 'translate(0px, -10px)',
      textSize: '14px'
    },
    titleStyle: {
      textAlign: 'center',
      borderBottom: '4px solid #ff4081'
    }
  }

  return selectedInvoice && invoiceDialogOpened ? (
    <div style={styles.InvoiceView}>
      <Dialog
        title="Invoice Details"
        actions={actions}
        modal={true}
        open={invoiceDialogOpened}
        onRequestClose={closeInvoiceDialog}
        background="#FAFAFA"
        contentStyle={styles.contentStyle}
        titleStyle={styles.titleStyle}
      >
        <div>
          <h4>Customer First Name:</h4>
          <p>{Invoice.customer.firstName}</p>
          <h4>Customer Last Name:</h4>
          <p>{Invoice.customer.lastName}</p>
          <h4>Street Address:</h4>
          <p>{Invoice.customer.address}</p>
          <h4>City:</h4>
          <p>{Invoice.customer.addressCity}</p>
        </div>
      </Dialog>
    </div>
  ) : (
    <div style={styles.InvoiceView}>
      <Dialog
        title="Invoice Details"
        actions={actions}
        modal={true}
        open={invoiceDialogOpened}
        onRequestClose={closeInvoiceDialog}
        background="#FAFAFA"
        contentStyle={styles.contentStyle}
        titleStyle={styles.titleStyle}
      >
        <div>
          <h4>Please select an invoice!</h4>
        </div>
      </Dialog>
    </div>
  )
}
