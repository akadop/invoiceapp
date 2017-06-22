import {
  Dialog,
  FlatButton,
  FloatingActionButton,
  RaisedButton,
} from 'material-ui'

import CreateInvoiceFormContainer from '../../containers/CreateInvoiceFormContainer'
import { HoverMorphIcon } from 'react-svg-buttons'

const styles = {
  InvoicePopUp: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  titleStyle: {
    borderBottom: '4px solid #ff4081',
  },
  contentStyle: {
    width: '85%',
    maxWidth: '1440px',
    transform: 'translate(0px,-100px)',
    marginBottom: '150px',
  },
  flatButtonStyle: {
    margin: 2,
  },
}

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
      style={styles.flatButtonStyle}
    />,
    <RaisedButton
      label="Previous Step"
      primary={true}
      keyboardFocused={true}
      onTouchTap={prevStepCreateInvoice}
      style={styles.flatButtonStyle}
      disabled={createInvoiceStep === 0}
    />,
    <RaisedButton
      label={createInvoiceStep === 3 ? 'Submit' : 'Next'}
      backgroundColor="#19B5FE"
      labelColor="#fff"
      keyboardFocused={true}
      style={styles.flatButtonStyle}
      onTouchTap={
        createInvoiceStep === 3 ? createInvoice : nextStepCreateInvoice
      }
    />,
  ]
  return (
    <div style={styles.InvoicePopUp}>
      <FloatingActionButton
        secondary={true}
        onTouchTap={openCreateInvoiceDialog}
      >
        <HoverMorphIcon
          baseType="plus"
          hoverType="plusSparks"
          size={56}
          thickness={3}
          color="#f9f9f9"
        />
      </FloatingActionButton>
      <Dialog
        title="Create an Invoice"
        titleStyle={styles.titleStyle}
        contentStyle={styles.contentStyle}
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
