import { closeInvoiceDialog, openInvoiceDialog } from '../lib/actions/ui'

import InvoiceDialog from '../components/dialogs/InvoiceDialog'
import { compose } from 'ramda'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import mapActions from '../lib/util/mapActions'
import retrieveInvoiceById from '../lib/queries/retrieveInvoiceById'

export const mapStateToProps = ({
  ui: { invoiceDialogOpened, selectedInvoice },
}) => ({ invoiceDialogOpened, selectedInvoice })
export const mapDispatchToProps = mapActions({
  closeInvoiceDialog,
  openInvoiceDialog,
})

export const container = compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(retrieveInvoiceById, {
    options: ({ selectedInvoice }) => ({
      variables: {
        eventId: selectedInvoice,
      },
      cache: 'network-only',
    }),
  })
)

export default container(InvoiceDialog)
