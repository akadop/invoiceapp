const express = require('express')
const path = require('path')
const next = require('next')
const compression = require('compression')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.use(bodyparser.json())
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

/** 
 * const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

// fake DB
const messages = []

// socket.io server
io.on('connection', socket => {
  socket.on('message', (data) => {
    messages.push(data)
    socket.broadcast.emit('message', data)
  })
})

nextApp.prepare().then(() => {
  app.get('/messages', (req, res) => {
    res.json(messages)
  })

  app.get('*', (req, res) => {
    return nextHandler(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
*/

/**
 * subscription newCustomer {
  Customer(filter: {mutation_in: [CREATED]}) {
    mutation
    node {
      firstName
      lastName
      email
    }
  }
}
*/
