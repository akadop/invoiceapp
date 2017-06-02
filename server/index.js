const express = require('express')
const path = require('path')
const next = require('next')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

const PORT = process.env.PORT || 3000

app.prepare().then(_ => {
  const server = express()

  server
    .use(compression())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    // serve service worker
    .get('/sw.js', (req, res) => res.sendFile(path.resolve('./.next/sw.js')))
    .get('*', (req, res) => handle(req, res))

  server.listen(PORT, err => {
    if (err) throw error

    console.log(`> App running on port ${PORT}`)
  })
})
