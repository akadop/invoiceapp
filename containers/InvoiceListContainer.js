import { compose, or } from 'ramda'
import { openInvoiceDialog, selectInvoice } from '../lib/actions/ui'

import InvoiceList from '../components/lists/InvoiceList'
import allInvoicesFromAuthenticatedUser
  from '../lib/queries/allInvoicesFromAuthenticatedUser'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import mapActions from '../lib/util/mapActions'

export const mapStateToProps = ({
  ui: { selectedInvoice, filteredInvoiceCustomer },
}) => ({ selectedInvoice, filteredInvoiceCustomer })

export const mapDispatchToProps = mapActions({
  openInvoiceDialog,
  selectInvoice,
})

export const container = compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(allInvoicesFromAuthenticatedUser, {
    options: ({ selectedInvoice, filteredInvoiceCustomer }) => ({
      variables: {
        invoiceId: or(selectedInvoice, ''),
        invoiceCustomer: or(filteredInvoiceCustomer, ''),
      },
      fetchPolicy: 'network-only',
    }),
  })
)

export default container(InvoiceList)
