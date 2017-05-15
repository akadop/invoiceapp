import SearchInvoiceForm from '../components/forms/SearchInvoiceForm'
import { compose } from 'ramda'
import { connect } from 'react-redux'
import mapActions from '../lib/util/mapActions'
import { reduxForm } from 'redux-form'
import { searchInvoice } from '../lib/stories/invoice'

export const mapDispatchToProps = mapActions({ searchInvoice })

export const container = compose(
  connect(null, mapDispatchToProps),
  reduxForm({ form: 'searchInvoiceForm' })
)

export default container(SearchInvoiceForm)
