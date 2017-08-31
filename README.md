[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/akadop/invoiceapp/tree/master)

# invoice app

Built with React, Redux, Graphql. 

This is a partial app custom built for a client with a large chain of Carpet/Flooring stores in Texas.

## How to Use
Hit the deploy now button above this


## How to build
1. Install nodeJs on your system [https://nodejs.org/en/]
2. cd project directory
3. to install the packages, run ` yarn `
4. once complete:
- to launch development mode with hot loading (changes are seen live on the local server as they are made, with no refreshing required)
    - ` yarn run dev ` 

- to launch production mode, run:
    - ` yarn run build ` followed by ` yarn run start `

### graphql schema

```gql
type Customer implements Node {
  address: String
  addressCity: String
  addressState: String
  addressZip: String
  createdAt: DateTime!
  driversLisc: String
  email: String
  firstName: String
  id: ID! @isUnique
  invoices: [Invoice!]! @relation(name: "InvoiceOnCustomer")
  lastName: String
  updatedAt: DateTime!
}

type File implements Node {
  contentType: String!
  createdAt: DateTime!
  id: ID! @isUnique
  name: String!
  secret: String! @isUnique
  size: Int!
  updatedAt: DateTime!
  url: String! @isUnique
}

type Invoice implements Node {
  createdAt: DateTime!
  customer: Customer @relation(name: "InvoiceOnCustomer")
  id: ID! @isUnique
  installer: String
  items: [Item!]! @relation(name: "InvoiceOnItem")
  payment: Payment @relation(name: "InvoiceOnPayment")
  scheduleDate: DateTime
  storeName: INVOICE_STORE_NAME!
  updatedAt: DateTime!
  user: User @relation(name: "SalesPerson")
}

type Item implements Node {
  color: String
  createdAt: DateTime!
  dimensionLength: String
  dimensionWidth: String
  estimatedQuantity: String
  estimatedTotal: String
  extendedPrice: String
  finalQuantity: String
  id: ID! @isUnique
  invoice: Invoice @relation(name: "InvoiceOnItem")
  itemType: ITEM_TYPE
  refNumber: String
  unitPrice: String
  updatedAt: DateTime!
}

type Payment implements Node {
  balance: String
  createdAt: DateTime!
  deposit: String @defaultValue(value: "0")
  id: ID! @isUnique
  invoice: Invoice @relation(name: "InvoiceOnPayment")
  paymentBy: PAYMENT_PAYMENT_BY!
  total: String
  updatedAt: DateTime!
}

type User implements Node {
  createdAt: DateTime!
  email: String @isUnique
  firstName: String!
  id: ID! @isUnique
  invoices: [Invoice!]! @relation(name: "SalesPerson")
  lastName: String!
  password: String
  role: USER_ROLE!
  updatedAt: DateTime!
}
```