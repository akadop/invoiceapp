const express = require('express')
const path = require('path')
const next = require('next')
const compression = require('compression')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.get('*', (req, res) => handle(req, res))
  server.post('/', (req, res) => {
    // new customer webhook
    const newCustomer = {
      firstName: req.body.createdNode.firstName,
      lastName: req.body.createdNode.lastName,
      email: req.body.createdNode.email,
      address: req.body.createdNode.address,
      addressCity: req.body.createdNode.addressCity,
      addressState: req.body.createdNode.addressState,
      addressZip: req.body.createdNode.addressZip,
    }
    console.log('New Customer Entry has successfully been created:')
    console.log(newCustomer)
    res.end
  })

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
