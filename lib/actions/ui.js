import {
  CLOSE_CREATE_INVOICE_DIALOG,
  FILTER_INVOICE,
  NEXT_STEP_CREATE_INVOICE,
  OPEN_CREATE_INVOICE_DIALOG,
  PREV_STEP_CREATE_INVOICE,
  SELECT_BOTTOM_NAV,
  SELECT_INVOICE,
  SET_INVOICE_CREATE_STEP,
  START_LOADER,
  STOP_LOADER,
} from '../types/ui'

export const startLoader = () => ({
  type: START_LOADER, // start loading icon
})

export const stopLoader = () => ({
  type: STOP_LOADER, // stop loading icon
})

export const selectBottomNav = ({ selectedBottomNav }) => ({
  type: SELECT_BOTTOM_NAV, // action when bottom nav is used
  payload: { selectedBottomNav },
})

export const filterInvoice = ({ id }) => ({
  type: FILTER_INVOICE, // Filter Invoices
  payload: { id },
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

export const setStepCreateInvoice = () => ({
  type: SET_INVOICE_CREATE_STEP, // delivers the step in the invoice creation process.
  payload: { step },
})

// Invoice Dialog Options
export const openCreateInvoiceDialog = () => ({
  type: OPEN_CREATE_INVOICE_DIALOG, // set dialog to open
})

export const closeCreateInvoiceDialog = () => ({
  type: CLOSE_CREATE_INVOICE_DIALOG, // set dialog to close
})
