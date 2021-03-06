import { Dialog, FlatButton, Paper } from 'material-ui'

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

export default ({
  data: { Invoice },
  invoiceDialogOpened,
  selectedInvoice,
  actions: { closeInvoiceDialog }
}) => {
  const actions = [
    <FlatButton label="Close" primary={true} onTouchTap={closeInvoiceDialog} />
  ]

  return Invoice && invoiceDialogOpened ? (
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
        modal={false}
        open={invoiceDialogOpened}
        onRequestClose={closeInvoiceDialog}
        background="#FAFAFA"
        contentStyle={styles.contentStyle}
        titleStyle={styles.titleStyle}
      >
        <div>
          <h2>Loading Invoice Details...</h2>
        </div>
      </Dialog>
    </div>
  )
}
