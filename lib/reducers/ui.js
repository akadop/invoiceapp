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

// our default state
export const initialState = {
  createInvoiceDialogOpened: false,
  invoiceDialogOpened: false,
  isLoading: false,
  selectedInvoice: '',
  filteredInvoiceCustomer: '',
  filteredUserName: '',
  createInvoiceStep: 0,
  sidebarOpen: false,
}

// the payloads to return when an action is triggered
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case START_LOADER:
      return {
        ...state,
        // loading animation start
        isLoading: true,
      }

    case STOP_LOADER:
      return {
        ...state,
        // loading animation stop
        isLoading: false,
      }

    case SELECT_INVOICE:
      return {
        ...state,
        // select an invoice
        selectedInvoice: payload.selectedInvoice,
      }

    case FILTER_INVOICE:
      return {
        ...state,
        // filter invoices
        filteredInvoiceCustomer: payload.customer,
      }

    case SET_STEP_CREATE_INVOICE:
      return {
        ...state,
        // payload will be the step number
        createInvoiceStep: payload.step,
      }

    case NEXT_STEP_CREATE_INVOICE:
      return {
        ...state,
        // move onto the next step of invoice creation
        createInvoiceStep: state.createInvoiceStep + 1,
      }

    case PREV_STEP_CREATE_INVOICE:
      return {
        ...state,
        // move back in the invoice creation process
        createInvoiceStep: state.createInvoiceStep - 1,
      }

    case OPEN_CREATE_INVOICE_DIALOG:
      return {
        ...state,
        // open dialog
        createInvoiceDialogOpened: true,
      }

    case CLOSE_CREATE_INVOICE_DIALOG:
      return {
        ...state,
        // close dialog (default)
        createInvoiceDialogOpened: false,
      }

    case OPEN_INVOICE_DIALOG:
      return {
        ...state,
        // open dialog
        invoiceDialogOpened: true,
      }

    case CLOSE_INVOICE_DIALOG:
      return {
        ...state,
        // close dialog
        invoiceDialogOpened: false,
      }

    case FILTER_USER:
      return {
        ...state,
        // filter user
        filteredUserName: payload.name,
      }

    case TOGGLE_SIDEBAR_OPEN:
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
      }

    default:
      return state
  }
}
