import InvoiceList from '../components/lists/InvoiceList'
import allInvoices from '../lib/queries/allInvoices'
import { compose } from 'ramda'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import mapActions from '../lib/util/mapActions'
import { selectInvoice } from '../lib/actions/ui'

export const mapStateToProps = ({
  ui: { selectedInvoice, invoiceDialogOpened }
}) => ({
  selectedInvoice,
  invoiceDialogOpened
})

export const mapDispatchToProps = mapActions({
  selectInvoice
})

export const container = compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(allInvoices, {
    options: { fetchPolicy: 'network-only' }
  })
)

export default container(InvoiceList)
