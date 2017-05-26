import { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

export default ({
  data: { Invoice },
  invoiceDialogOpened,
  actions: { closeInvoiceDialog, openInvoiceDialog },
}) => {
  const actions = [
    <FlatButton label="Close" primary={true} onTouchTap={closeInvoiceDialog} />,
  ]

  const styles = {
    InvoiceView: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
  }

  return (
    <div style={styles.InvoiceView}>
      <Dialog
        title="Invoice Details"
        actions={actions}
        modal={false}
        open={invoiceDialogOpened}
        onRequestClose={closeInvoiceDialog}
        background="#FAFAFA"
        contentStyle={{
          width: '85%',
          maxWidth: '1440px',
          transform: 'translate(0px, 32px)',
        }}
        titleStyle={{
          textAlign: 'center',
          borderBottom: '4px solid #ff4081',
          marginBottom: '20px',
        }}
      >
        <h4>Invoice ID: {Invoice.id}</h4>
        <p>Customer First Name: {Invoice.firstName}</p>
        <p>Customer Last Name: {Invoice.lastName}</p>
      </Dialog>
    </div>
  )
}
