import { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

export default ({
  data: { Invoice },
  invoiceDialogOpened,
  selectedInvoice,
  actions: { closeInvoiceDialog, openInvoiceDialog },
}) => {
  const actions = [
    <FlatButton label="Close" primary={true} onTouchTap={closeInvoiceDialog} />,
  ]

  const mapInvoiceDetails = ({
    id,
    createdAt,
    customer,
    items,
    payment,
    scheduleDate,
    storeName,
  }) => (
    <div>
      <h4>Customer First Name:</h4>
      <p>{customer.firstName}</p>
      <h4>Customer Last Name:</h4>
      <p>{customer.lastName}</p>
      <h4>Street Address:</h4>
      <p>{customer.address}</p>
      <h4>City:</h4>
      <p>{customer.addressCity}</p>
    </div>
  )

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
        />
        {mapInvoiceDetails(Invoice)}
      </div>
    )
  } else return null
}
