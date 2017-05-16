import { compose, or } from 'ramda'

import InvoiceList from '../components/lists/InvoiceList'
import allInvoicesFromCustomerAndUser
  from '../lib/queries/allInvoicesFromCustomerAndUser'
import authenticatedUser from '../lib/queries/authenticatedUser'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'

// import mapActions from '../universal/utils/mapActions';

export const mapStateToProps = ({
  ui: { selectedInvoice, filteredInvoiceCustomer },
}) => ({ selectedInvoice, filteredInvoiceCustomer })

// export const mapDispatchToProps = mapActions({});

export const container = compose(
  connect(mapStateToProps, null),
  graphql(allInvoicesFromCustomerAndUser, {
    options: ({ data, selectedInvoice, filteredInvoiceCustomer }) => ({
      variables: {
        userId: data && data.user && data.user.id ? data.user.id : '',
        invoiceId: or(selectedInvoice, ''),
        invoiceCustomer: or(filteredInvoiceCustomer, ''),
      },
      fetchPolicy: 'network-only',
    }),
  }),
  graphql(authenticatedUser, { options: { fetchPolicy: 'network-only' } })
)

export default container(InvoiceList)
