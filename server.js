const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

app.prepare().then(_ => {
  const server = express()

  server.get('/sw.js', (req, res) =>
    res.sendFile(path.resolve('./.next/sw.js'))
  )

  server.get('*', (req, res) => handle(req, res))

  server.listen(3000, err => {
    if (err) throw error

    console.log('> App running on port 3000')
  })
})
