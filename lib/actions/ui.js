import {
  CLOSE_CREATE_INVOICE_DIALOG,
  CLOSE_INVOICE_DIALOG,
  FILTER_INVOICE,
  FILTER_USER,
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
  type: START_LOADER, // start loading icon
})

export const stopLoader = () => ({
  type: STOP_LOADER, // stop loading icon
})

export const filterInvoice = ({ customer }) => ({
  type: FILTER_INVOICE, // Filter Invoices
  payload: { customer },
})

export const filterUser = ({ name }) => ({
  type: FILTER_USER, // filter users
  payload: { name },
})

export const selectInvoice = ({ selectedInvoice }) => ({
  type: SELECT_INVOICE, // Invoice Selection
  payload: { selectedInvoice },
})

// Invoice Step Creation Actions
export const nextStepCreateInvoice = () => ({
  type: NEXT_STEP_CREATE_INVOICE, // move to next step,
})

export const prevStepCreateInvoice = () => ({
  type: PREV_STEP_CREATE_INVOICE, // move back a step
})

export const setStepCreateInvoice = ({ step }) => ({
  type: SET_STEP_CREATE_INVOICE, // delivers the step in the invoice creation process.
  payload: { step },
})

// Create Invoice Dialog Options
export const openCreateInvoiceDialog = () => ({
  type: OPEN_CREATE_INVOICE_DIALOG, // set dialog to open
})

export const closeCreateInvoiceDialog = () => ({
  type: CLOSE_CREATE_INVOICE_DIALOG, // set dialog to close
})

// Invoice Dialog
export const openInvoiceDialog = () => ({ type: OPEN_INVOICE_DIALOG })

export const closeInvoiceDialog = () => ({ type: CLOSE_INVOICE_DIALOG })

// Nav bar (experimental)

export const toggleSidebarOpen = () => ({
  // open and close the navbar
  type: TOGGLE_SIDEBAR_OPEN,
})
