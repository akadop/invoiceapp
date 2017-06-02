import { Dialog, FlatButton, Paper, RaisedButton } from 'material-ui'

import { Component } from 'react'

export default ({
  data: { Invoice },
  invoiceDialogOpened,
  selectedInvoice,
  actions: { closeInvoiceDialog },
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
  if (selectedInvoice) {
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
    )
  } else return null
}
