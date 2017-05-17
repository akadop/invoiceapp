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
    <div>
      <FloatingActionButton
        secondary={true}
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
        actions={actions}
        modal={false}
        bodyStyle={{ top: '5%' }}
        open={createInvoiceDialogOpened}
        onRequestClose={closeCreateInvoiceDialog}
        background="#FAFAFA"
        autoScrollBodyContent={true}
        autoDetectWindowHeight={false}
      >
        <CreateInvoiceFormContainer />
      </Dialog>
    </div>
  )
}
