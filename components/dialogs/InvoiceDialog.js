import { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import { HoverMorphIcon } from 'react-svg-buttons'
import RaisedButton from 'material-ui/RaisedButton'
import theme from '../../lib/util/theme'

export default ({
  data: { Invoice },
  invoiceDialogOpened,
  actions: { closeInvoiceDialog, openInvoiceDialog },
}) => {
  const actions = [
    <FlatButton label="Close" primary={true} onTouchTap={closeInvoiceDialog} />,
  ]

  return (
    Invoice &&
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
      <Dialog
        title={Invoice.id}
        actions={actions}
        modal={false}
        open={invoiceDialogOpened}
        onRequestClose={closeInvoiceDialog}
        background="#FAFAFA"
        bodyStyle={{
          display: 'flex',
          margin: 0,
          marginBottom: '5px',
          padding: 0,
        }}
        titleStyle={{
          textAlign: 'center',
          color: '#fff',
          borderBottom: `5px solid ${theme.palette.accent2Color}`,
          backgroundColor: theme.palette.accent1Color,
          marginBottom: '20px',
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: Invoice.customer }} />
      </Dialog>
    </div>
  )
}
