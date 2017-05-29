import {
  closeInvoiceDialog,
  openInvoiceDialog,
  selectInvoice,
} from '../lib/actions/ui'
import { compose, or } from 'ramda'

import InvoiceList from '../components/lists/InvoiceList'
import allInvoices from '../lib/queries/allInvoices'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import mapActions from '../lib/util/mapActions'

export const mapStateToProps = ({
  ui: { selectedInvoice, invoiceDialogOpened },
}) => ({
  selectedInvoice,
  invoiceDialogOpened,
})

export const mapDispatchToProps = mapActions({
  openInvoiceDialog,
  selectInvoice,
  closeInvoiceDialog,
})

export const container = compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(allInvoices, {
    options: ({ selectedInvoice }) => ({
      variables: {
        invoiceId: selectedInvoice,
      },
      fetchPolicy: 'network-only',
    }),
  })
)

export default container(InvoiceList)
