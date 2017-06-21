import {
  CLOSE_CREATE_INVOICE_DIALOG,
  CLOSE_INVOICE_DIALOG,
  FILTER_INVOICE,
  NEXT_STEP_CREATE_INVOICE,
  OPEN_CREATE_INVOICE_DIALOG,
  OPEN_INVOICE_DIALOG,
  PREV_STEP_CREATE_INVOICE,
  SELECT_INVOICE,
  SET_STEP_CREATE_INVOICE,
  START_LOADER,
  STOP_LOADER,
  TOGGLE_SIDEBAR_OPEN,
} from '../types/ui'

export const startLoader = () => ({
  // start loading animation
  type: START_LOADER,
})

export const stopLoader = () => ({
  // stop loading animation
  type: STOP_LOADER,
})

export const filterInvoice = ({ customer }) => ({
  // Filter Invoices
  type: FILTER_INVOICE,
  payload: { customer },
})

export const selectInvoice = ({ selectedInvoice }) => ({
  // grab a specific invoice id
  type: SELECT_INVOICE,
  payload: { selectedInvoice },
})

export const nextStepCreateInvoice = () => ({
  // move forward in invoice creation dialog
  type: NEXT_STEP_CREATE_INVOICE,
})

export const prevStepCreateInvoice = () => ({
  // move back in invoice creation dialog
  type: PREV_STEP_CREATE_INVOICE,
})

export const setStepCreateInvoice = ({ step }) => ({
  // delivers the step in the invoice creation process
  type: SET_STEP_CREATE_INVOICE,
  payload: { step },
})

export const openCreateInvoiceDialog = () => ({
  // open the invoice creation dialog
  type: OPEN_CREATE_INVOICE_DIALOG,
})

export const closeCreateInvoiceDialog = () => ({
  // close the invoice creation dialog
  type: CLOSE_CREATE_INVOICE_DIALOG,
})

export const openInvoiceDialog = () => ({
  // once we have a specific invoice id, open dialog containing specific details
  type: OPEN_INVOICE_DIALOG,
})

export const closeInvoiceDialog = () => ({
  // close the dialog box containing specific invoice details
  type: CLOSE_INVOICE_DIALOG,
})

export const toggleSidebarOpen = () => ({
  // open and close the sidebar
  type: TOGGLE_SIDEBAR_OPEN,
})
