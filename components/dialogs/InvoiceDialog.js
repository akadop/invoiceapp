import { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import { HoverMorphIcon } from 'react-svg-buttons'
import Paper from 'material-ui/Paper'
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
    <div>
      <FloatingActionButton
        secondary={true}
        style={{
          position: 'fixed',
          right: '15px',
          bottom: '85px',
          marginRight: '20px',
        }}
        onTouchTap={openInvoiceDialog}
      >
        <HoverMorphIcon
          baseType="plus"
          hoverType="plusSparks"
          size={56}
          thickness={3}
          color="#ffffff"
        />
      </FloatingActionButton>
      <div style={styles.InvoiceView}>
        <Dialog
          title="Invoice"
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
          <Paper zDepth={2} style={{ margin: 20 }}>
            <h4>Customer:</h4>
          </Paper>
        </Dialog>
      </div>
    </div>
  )
}
