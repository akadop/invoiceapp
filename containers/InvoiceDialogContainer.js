import { closeInvoiceDialog, openInvoiceDialog } from '../lib/actions/ui'
import { compose, or } from 'ramda'

import InvoiceDialog from '../components/dialogs/InvoiceDialog'
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
        invoiceId: selectedInvoice,
      },
      cache: 'network-only',
    }),
  })
)

export default container(InvoiceDialog)
