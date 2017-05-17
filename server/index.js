const path = require('path')
const fs = require('fs')
const https = require('https')
const prog = require('caporal')
const express = require('express')
const compression = require('compression')
const next = require('next')
const cookie = require('react-cookie')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const request = require('request')
const bodyParser = require('body-parser')
const { or } = require('ramda')

const { version, description, name } = require('../package')
const { API_AUTH_URL, API_AUTH_TOKEN_SECRET } = require('../metadata')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

// Request module is the easiest way to perform HTTP request with cookies plug.
// future :: FetchOptions a -> Promise b
const future = options =>
  new Promise((resolve, reject) => {
    try {
      request(
        options,
        (err, response, body) =>
          or(err, !body) ? reject(or(err, 'Empty response')) : resolve(body)
      )
    } catch (err) {
      reject(err)
    }
  })

// Transform serialized cookies into real request cookies
// mapCookiesToAttachment :: RequestCookie a, String b -> RequestCookie a
const mapCookiesToAttachment = (attachment, cookies) => {
  cookies.split('; ').forEach(cookie => attachment.setCookie(cookie))

  return attachment
}

// hasApiError :: Response a -> Boolean b
const hasApiError = response => response.message

// Provide a new cookie request.
// attachement :: _ -> RequestCookie a
const attachment = () => request.jar()

// JWT Express middleware.
// authenticator :: Error a, Request b, Response c, Function d -> _
const authenticator = (err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ err: 'Invalid authorization via JWT token.' })
  }
  next()
}

// Service worker route (service worker work only in browser and need to be fetch).
// provideServiceWorker :: Request a, Response b -> Response b
const provideServiceWorker = (req, res) =>
  res.sendFile(path.resolve('./.next/sw.js'))

// API Auth0 /auth route
// auth :: Request a, Response b -> Response b
const auth = (req, res) => {
  const { username, password } = req.body
  const jar = attachment()
  const options = {
    method: 'POST',
    qs: { format: 'json' },
    headers: { 'Content-Type': 'application/json' },
    form: { login: username, password, format: 'json', remind: 'true' },
    jar,
  }
}

// Serve the application.
// serve :: [String a], AppPackage b -> _
const serve = (argv, { version, description, name }) => {
  prog
    .name(name)
    .bin('node server.js')
    .description(description)
    .version(version)
    .command('start', 'Start app')
    .argument('<port>', 'App server port, API route will be available as /api')
    .action(({ port }) => {
      const app = next({
        dev: process.env.NODE_ENV === 'development',
        dir: process.cwd(),
      })
      const handle = app.getRequestHandler()
      const server = express()
      app
        .prepare()
        .then(() => {
          const isAuthorized = {
            path: [
              '/api/auth',
              '/auth',
              '/users',
              '/create-invoice',
              '/my-invoices',
              '/',
              '/sw.js',
              '/favicon.ico',
              /\/_next/,
              /\/static/,
            ],
          }
          server
            .use(cookieParser())
            .use(compression())
            .use(bodyParser.json({ limit: '3mb' }))
            .use(
              expressJwt({ secret: API_AUTH_TOKEN_SECRET }).unless(isAuthorized)
            )
            .use(authenticator)
            .get('/sw.js', provideServiceWorker)
            .post('/api/auth', auth)
            .get('*', (req, res) => {
              cookie.plugToRequest(req, res)

              return handle(req, res)
            })
        })
        .then(() => {
          server.listen(port, err => {
            if (err) {
              throw err
            }

            console.log(`> Ready on https://localhost:${port}`)
          })
        })
        .catch(err => console.error(err))
    })

  prog.parse(argv)
}

serve(process.argv, { version, description, name })
