import {
  closeCreateInvoiceDialog,
  filterInvoice,
  startLoader,
  stopLoader,
} from '../actions/ui'

import { default as createInvoiceQ } from '../mutations/createInvoice'
import { toastr } from 'react-redux-toastr'

export const createInvoice = () => async (dispatch, getState, client) => {
  // pull the form values from the app state
  const { createInvoiceForm } = getState().form
  const { values } = createInvoiceForm

  // check for invalid submission errors
  if (!values) {
    return toastr.error(
      'Error: Invoice was not created.',
      'please complete the required fields!'
    )
  }
  // if one of the fields are missing, throw an error
  try {
    const {
      items,
      customer,
      payment,
      storeName,
      scheduleDate,
      installer = false,
    } = values
    if (
      !items ||
      !customer ||
      !payment ||
      !scheduleDate ||
      !storeName ||
      !installer
    ) {
      return toastr.error('Please complete the necessary fields!')
    }
    // if all good --> dispatch the action to start the loading animation
    dispatch(startLoader())
    // call the apollo client to create the invoice using the values pulled
    await client.mutate({
      mutation: createInvoiceQ,
      variables: {
        installer: installer,
        scheduleDate: scheduleDate,
        customer: customer,
        storeName: storeName,
        items: items,
        payment: payment,
      },
      refetchQueries: ['allInvoices'], // we want to update the invoices list after the new one is made
    })

    // set a max timer limit --> if there is no response within 500, stop the loader.
    setTimeout(() => dispatch(stopLoader()), 500) // connection error

    // dispatch the action to close the create invoice process
    dispatch(closeCreateInvoiceDialog())

    // success notification
    toastr.success('Invoice created', 'Invoice was added successfully.')
  } catch (err) {
    console.log('Error', err)
    setTimeout(() => dispatch(stopLoader()), 500)

    // failure notification
    toastr.error(
      'Invoice Creation Failed',
      'Internal Error, Try again. If this continues, contact the administrator.'
    )
  }
}

// Filter for an invoice. The values sent will collectively be grouped and labeled as 'name',
// and with the name value we will run it against all the form state values until a match is found.

export const searchInvoice = () => (dispatch, getState) => {
  const { searchInvoiceForm } = getState().form
  const { values } = searchInvoiceForm

  if (!values) {
    return dispatch(
      filterInvoice({ customer: { firstName: '', lastName: '' } })
    )
  }

  const { customer } = values

  dispatch(filterInvoice({ name: !values ? '' : customer }))
}
