import { gql } from 'react-apollo'

export default gql`
  mutation createInvoice(
    $customer: InvoicecustomerCustomer
    $scheduleDate: DateTime
    $installer: String
    $storeName: INVOICE_STORE_NAME!
    $items: [InvoiceitemsItem!]
    $payment: InvoicepaymentPayment
  ) {
    createInvoice(
      customer: $customer
      items: $items
      payment: $payment
      scheduleDate: $scheduleDate
      storeName: $storeName
      installer: $installer
    ) {
      storeName
      scheduleDate
      installer
      customer {
        id
        address
        addressCity
        addressState
        addressZip
        firstName
        lastName
        driversLisc
        email
      }
      items {
        id
        color
        dimensionWidth
        dimensionLength
        extendedPrice
        estimatedTotal
        estimatedQuantity
        finalQuantity
        itemType
        refNumber
        unitPrice
      }
      payment {
        paymentBy
        deposit
        balance
        id
        total
      }
    }
  }
`
