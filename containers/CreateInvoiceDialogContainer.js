import {
  closeCreateInvoiceDialog,
  nextStepCreateInvoice,
  openCreateInvoiceDialog,
  prevStepCreateInvoice,
} from '../lib/actions/ui'

import CreateInvoiceDialog from '../components/dialogs/CreateInvoiceDialog'
import authenticatedUser from '../lib/queries/authenticatedUser'
import { compose } from 'ramda'
import { connect } from 'react-redux'
import { createInvoice } from '../lib/stories/invoice'
import { graphql } from 'react-apollo'
import mapActions from '../lib/util/mapActions'

export const mapStateToProps = ({
  ui: { createInvoideDialogOpened, createInvoiceStep },
}) => ({ createInvoiceStep, createInvoiceDialogOpened })

export const mapDispatchToProps = mapActions({
  createInvoice,
  closeCreateInvoiceDialog,
  openCreateInvoiceDialog,
  prevStepCreateInvoice,
  nextStepCreateInvoice,
})

export const container = compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(authenticatedUser, { options: { fetchPolicy: 'network-only' } })
)

export default container(CreateInvoiceDialog)
