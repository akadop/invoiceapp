import { compose, or } from 'ramda'

import InvoiceList from '../components/lists/InvoiceList'
import allEventsFromPromotionAndUser
  from '../universal/queries/allEventsFromPromotionAndUser'
import authenticatedUser from '../lib/queries/authenticatedUser'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'

// import mapActions from '../universal/utils/mapActions';

export const mapStateToProps = ({
  ui: { selectedInvoice, filteredInvoiceName },
}) => ({ selectedInvoice, filteredInvoiceName })

// export const mapDispatchToProps = mapActions({});

export const container = compose(
  connect(mapStateToProps, null),
  graphql(allEventsFromPromotionAndUser, {
    options: ({ data, selectedInvoice, filteredInvoiceName }) => ({
      variables: {
        userId: data && data.user && data.user.id ? data.user.id : '',
        invoiceId: or(selectedInvoice, ''),
        invoiceName: or(filteredInvoiceName, ''),
      },
      fetchPolicy: 'network-only',
    }),
  }),
  graphql(authenticatedUser, { options: { fetchPolicy: 'network-only' } })
)

export default container(InvoiceList)
