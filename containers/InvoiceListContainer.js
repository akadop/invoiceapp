import { compose, or } from 'ramda'
import { openInvoiceDialog, selectInvoice } from '../lib/actions/ui'

import InvoiceList from '../components/lists/InvoiceList'
import allEventsFromPromotionAndAuthenticatedUser
  from '../universal/queries/allEventsFromPromotionAndAuthenticatedUser'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import mapActions from '../lib/util/mapActions'

export const mapStateToProps = ({
  ui: { selectedInvoice, filteredInvoiceName },
}) => ({ selectedInvoice, filteredInvoiceName })

export const mapDispatchToProps = mapActions({
  openInvoiceDialog,
  selectInvoice,
})

export const container = compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(allEventsFromPromotionAndAuthenticatedUser, {
    options: ({ selectedPromotion, filteredEventName }) => ({
      variables: {
        promotionId: or(selectedPromotion, ''),
        eventName: or(filteredEventName, ''),
      },
      fetchPolicy: 'network-only',
    }),
  })
)

export default container(EventList)
