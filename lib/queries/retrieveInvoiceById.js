import { gql } from 'react-apollo'

export default gql`
  query Invoice($invoiceId: ID!) {
    Invoice(id: $invoiceId) {
      scheduleDate
      installer
      storeName
      createdAt
      updatedAt
      customer {
        address
        addressCity
        addressState
        addressZip
        email
        driversLisc
        firstName
        lastName
      }
      _itemsMeta {
        count
      }
      items {
        color
        dimensionLength
        dimensionWidth
        estimatedTotal
        estimatedQuantity
        extendedPrice
        finalQuantity
        itemType
        refNumber
        unitPrice
      }
      payment {
        balance
        deposit
        paymentBy
        total
      }
    }
  }
`
