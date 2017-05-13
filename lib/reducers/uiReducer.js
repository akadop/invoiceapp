import {
  CLOSE_ADD_ITEM_DIALOG,
  CLOSE_CUSTOMER_DIALOG,
  CLOSE_PAYMENT_DIALOG,
  FILTER_CUSTOMER,
  FILTER_INVOICE,
  FILTER_SALESPERSON,
  NEXT_STEP_CREATE_INVOICE,
  OPEN_ADD_ITEM_DIALOG,
  OPEN_CUSTOMER_DIALOG,
  OPEN_PAYMENT_DIALOG,
  PREV_STEP_CREATE_INVOICE,
  SELECT_BOTTOM_NAV,
  SELECT_CUSTOMER,
  SELECT_INVOICE,
  SELECT_ITEM,
  SET_STEP_CREATE_INVOICE,
  START_LOADER,
  STOP_LOADER,
} from '../actions/auth'

// our default state
export const initialState = {
  isLoading: false,
  selectedInvoice: '',
  selectedItem: '',
  selectedCustomer: '',
  selectedBottomNav: '',
  createInvoiceStep: 0,
  addItemDialogOpened: false,
  paymentDialogOpened: false,
  customerDialogOpened: false,
  filteredCustomerName: '',
  filteredInvoiceName: '',
  filteredSalespersonName: '',
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

    case NEXT_STEP_CREATE_INVOICE:
      return {
        ...state,
        // next step in invoice creation
        createInvoiceStep: state.createInvoiceStep + 1,
      }

    case PREV_STEP_CREATE_INVOICE:
      return {
        ...state,
        // previous step in invoice creation
        createInvoiceStep: state.createInvoiceStep - 1,
      }

    case SET_STEP_CREATE_INVOICE:
      return {
        ...state,
        // setting a step in invoice creation
        createInvoiceStep: payload.step,
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
        filteredInvoiceName: payload.name,
      }

    case SELECT_CUSTOMER:
      return {
        ...state,
        // select a specific customer
        selectedCustomer: payload.selectedCustomer,
      }

    case SELECT_ITEM:
      return {
        ...state,
        // select a specific item from the item list
        selectedItem: payload.selectedItem,
      }

    case FILTER_CUSTOMER:
      return {
        ...state,
        // filter a specific customer
        filteredCustomerName: payload.name,
      }

    case FILTER_SALESPERSON:
      return {
        ...state,
        // filter invoices by salesperson
        filteredSalespersonName: payload.name,
      }

    case OPEN_ADD_ITEM_DIALOG: {
      return {
        ...state,
        // open the dialog that adds an individual item on invoice
        addItemDialogOpened: true,
      }
    }

    case CLOSE_ADD_ITEM_DIALOG: {
      return {
        ...state,
        // close the dialog that adds an individual item on invoice
        addItemDialogOpened: false,
      }
    }

    case OPEN_PAYMENT_DIALOG: {
      return {
        ...state,
        // open the payment dialog
        paymentDialogOpened: true,
      }
    }

    case CLOSE_PAYMENT_DIALOG: {
      return {
        ...state,
        // close the payment dialog
        paymentDialogOpened: false,
      }
    }

    case OPEN_CUSTOMER_DIALOG: {
      return {
        ...state,
        // open the customer dialog
        customerDialogOpened: true,
      }
    }

    case CLOSE_CUSTOMER_DIALOG: {
      return {
        ...state,
        // close customer dialog
        customerDialogOpened: false,
      }
    }

    default:
      return state
  }
}
