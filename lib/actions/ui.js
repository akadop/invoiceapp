import {
  FILTER_INVOICE,
  NEXT_STEP_CREATE_INVOICE,
  PREV_STEP_CREATE_INVOICE,
  SELECT_BOTTOM_NAV,
  SELECT_INVOICE,
  SET_INVOICE_CREATE_STEP,
  START_LOADER,
  STOP_LOADER,
} from '../types/ui'

export const startLoader = () => ({ type: START_LOADER })

export const stopLoader = () => ({ type: STOP_LOADER })

export const selectBottomNav = ({ selectedBottomNav }) => ({
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

// Invoice Creation Actions
export const nextStepCreateInvoice = () => ({ type: NEXT_STEP_CREATE_INVOICE })
export const prevStepCreateInvoice = () => ({ type: PREV_STEP_CREATE_INVOICE })
export const setStepCreateInvoice = () => ({
  type: SET_INVOICE_CREATE_STEP,
  // setStepCreateInvoice triggers and delivers the step in the invoice creation process.
  payload: { step },
})
