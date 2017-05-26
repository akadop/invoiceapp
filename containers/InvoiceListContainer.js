import { compose, or } from 'ramda'
import { openInvoiceDialog, selectInvoice } from '../lib/actions/ui'

import InvoiceList from '../components/lists/InvoiceList'
import allInvoices from '../lib/queries/allInvoices'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import mapActions from '../lib/util/mapActions'

export const mapStateToProps = ({ ui: { selectedInvoice } }) => ({
  selectedInvoice,
})

export const mapDispatchToProps = mapActions({
  openInvoiceDialog,
  selectInvoice,
})

export const container = compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(allInvoices, {
    options: ({ selectedInvoice }) => ({
      variables: {
        invoiceId: or(selectedInvoice, ''),
      },
      fetchPolicy: 'network-only',
    }),
  })
)

export default container(InvoiceList)
