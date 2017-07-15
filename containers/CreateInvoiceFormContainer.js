import CreateInvoiceForm from '../components/forms/CreateInvoiceForm'
import { compose } from 'ramda'
import { connect } from 'react-redux'
import mapActions from '../lib/util/mapActions'
import { reduxForm } from 'redux-form'
import { setStepCreateInvoice } from '../lib/actions/ui'

export const mapStateToProps = ({ ui: { createInvoiceStep } }) => ({
  createInvoiceStep
})

export const mapDispatchToProps = mapActions({ setStepCreateInvoice })

export const container = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'createInvoiceForm',
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
  })
)

export default container(CreateInvoiceForm)
