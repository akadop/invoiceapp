# invoice app

- Progressive web app with Next.js (server rendered node.js), React, Redux (state management), Apollo (graphql client).
- Universal rendering with 100/100 on Google Lighthouse quality test.
- Service-worker, lazy-loading, code-splitting, server-side rendering, offline support.
- Hard-caching policy, Gzip compression, HTTP/2, SSL, home-screen installer, manifest.
- Small client-side foot-print & latency for the best experience (0kb/350ms cache/offline, 100kb/500ms first render).
- Graph.cool back-end, we use a small express API for using Auth0 authentication cookies.
- Uses the latest standard (ES6/ES7) with Babel and small WebPack configuration (thanks to Next.js package/team).


# schema

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
  auth0UserId: String @isUnique
  createdAt: DateTime!
  email: String @isUnique
  firstName: String!
  id: ID! @isUnique
  invoices: [Invoice!]! @relation(name: "SalesPerson")
  lastName: String!
  password: String
  updatedAt: DateTime!
}
```

## How to use

1. Install nodeJs on your system [https://nodejs.org/en/]
2. cd project directory
3. to install the packages, run ` yarn `
4. once complete:
- to launch development mode with hot loading (changes are seen live on the local server as they are made, with no refreshing required)
    - ` yarn run dev ` 

- to launch production mode, run:
    - ` yarn run build ` followed by ` yarn run start `