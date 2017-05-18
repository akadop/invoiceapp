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
      backgroundColor="#19B5FE"
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
        style={{ marginLeft: 22 }}
      >
        <HoverMorphIcon
          baseType="plus"
          hoverType="plusSparks"
          size={56}
          thickness={3}
          color="#fff"
        />
      </FloatingActionButton>
      <Dialog
        title="Create an Invoice"
        actions={actions}
        modal={true}
        open={createInvoiceDialogOpened}
        onRequestClose={closeCreateInvoiceDialog}
        background="#FAFAFA"
        autoScrollBodyContent={true}
        autoDetectWindowHeight={true}
        repositionOnUpdate={false}
      >
        <CreateInvoiceFormContainer />
      </Dialog>
    </div>
  )
}
