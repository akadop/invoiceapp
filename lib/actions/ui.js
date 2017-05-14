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

// misc.

export const startLoader = () => ({
  // start loading icon
  type: START_LOADER,
})

export const stopLoader = () => ({
  // stop loading icon
  type: STOP_LOADER,
})
export const selectBottomNav = ({ selectedBottomNav }) => ({
  // action when bottom nav is used
  type: SELECT_BOTTOM_NAV,
  payload: { selectedBottomNav },
})

// Filter Invoices

export const filterInvoice = ({ id }) => ({
  type: FILTER_INVOICE,
  payload: { id },
})

// Invoice Selection

export const selectInvoice = ({ selectedInvoice }) => ({
  type: SELECT_INVOICE,
  payload: { selectedInvoice },
})

// Invoice Step Creation Actions

export const nextStepCreateInvoice = () => ({
  // move to next step
  type: NEXT_STEP_CREATE_INVOICE,
})
export const prevStepCreateInvoice = () => ({
  // move back a step
  type: PREV_STEP_CREATE_INVOICE,
})
export const setStepCreateInvoice = () => ({
  type: SET_INVOICE_CREATE_STEP,
  // setStepCreateInvoice triggers and delivers the step in the invoice creation process.
  payload: { step },
})

// Invoice Dialog Options

export const openCreateInvoiceDialog = () => ({
  type: OPEN_CREATE_INVOICE_DIALOG,
  // set dialog to open
})
export const closeCreateInvoiceDialog = () => ({
  type: CLOSE_CREATE_INVOICE_DIALOG,
  // set dialog to close
})
