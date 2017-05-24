import { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import { HoverMorphIcon } from 'react-svg-buttons'
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
    Invoice &&
    <div style={styles.InvoiceView}>
      <Dialog
        title={Invoice.id}
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
        <div dangerouslySetInnerHTML={{ __html: Invoice.customer }} />
      </Dialog>
    </div>
  )
}
