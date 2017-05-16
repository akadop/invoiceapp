import {
  Dialog,
  FlatButton,
  FloatingActionButton,
  RaisedButton,
} from 'material-ui'

import { Component } from 'react'
import CreateInvoiceFormContainer
  from '../../containers/CreateInvoiceFormContainer'
import { HoverMorphIcon } from 'react-svg-buttons'
import theme from '../../lib/hocs/theme'

export default ({
  createInvoiceDialogOpened,
  createInvoiceStep,
  actions: {
    createInvoice,
    closeCreateInvoiceDialog,
    openCreateInvoiceDialog,
    prevStepCreateInvoice,
    nextStepCreateInvoice,
  },
}) => {
  const actions = [
    <FlatButton
      label="Close"
      primary={true}
      onTouchTap={closeCreateInvoiceDialog}
      style={{ margin: 2 }}
    />,
    <RaisedButton
      label="Previous Step"
      primary={true}
      keyboardFocused={true}
      onTouchTap={prevStepCreateInvoice}
      style={{ margin: 2 }}
      disabled={createInvoiceStep === 0}
    />,
    <RaisedButton
      label={createInvoiceStep === 3 ? 'Submit' : 'Next'}
      backgroundColor="#2ecc71"
      labelColor="#fff"
      keyboardFocused={true}
      style={{ margin: 2 }}
      onTouchTap={
        createInvoiceStep === 3 ? createInvoice : nextStepCreateInvoice
      }
    />,
  ]

  return (
    <div style={{ display: 'flex', display: '-webkit-flex' }}>
      <FloatingActionButton
        secondary={true}
        style={{
          position: 'fixed',
          right: '15px',
          bottom: '85px',
          marginRight: '20px',
        }}
        onTouchTap={openCreateInvoiceDialog}
      >
        <HoverMorphIcon
          baseType="plus"
          hoverType="plusSparks"
          size={56}
          thickness={4}
          color="#fff"
        />
      </FloatingActionButton>
      <Dialog
        title="Create an Invoice"
        contentStyle={{
          //position: 'fixed',
          alignSelf: 'top',
          justifySelf: 'center',
          //transform: 'translate(-50%, -50%)',
        }}
        actions={actions}
        modal={false}
        open={createInvoiceDialogOpened}
        onRequestClose={closeCreateInvoiceDialog}
        background="#FAFAFA"
        autoScrollBodyContent={true}
        autoDetectWindowHeight={false}
        bodyStyle={{ margin: 0, marginBottom: '5px', padding: 0 }}
        titleStyle={{
          textAlign: 'center',
          color: '#fff',
          borderBottom: `5px solid ${theme.palette.accent2Color}`,
          backgroundColor: '#2196F3',
          marginBottom: '20px',
        }}
      >
        <CreateInvoiceFormContainer />
      </Dialog>
    </div>
  )
}
