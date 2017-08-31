import InvoiceDialog from '../components/dialogs/InvoiceDialog'
import { closeInvoiceDialog } from '../lib/actions/ui'
import { compose } from 'ramda'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import mapActions from '../lib/util/mapActions'
import retrieveInvoiceById from '../lib/queries/retrieveInvoiceById'

export const mapStateToProps = ({
  ui: { invoiceDialogOpened, selectedInvoice }
}) => ({
  invoiceDialogOpened,
  selectedInvoice
})

export const mapDispatchToProps = mapActions({
  closeInvoiceDialog
})

export const container = compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(retrieveInvoiceById, {
    options: ({ selectedInvoice }) => ({
      variables: {
        invoiceId: selectedInvoice
      },
      cache: 'cache-and-network'
    })
  })
)

export default container(InvoiceDialog)
