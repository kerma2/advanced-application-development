require('dotenv').config()

import { bold, dim, green } from 'chalk'

import server from './server'

server
  .listen()
  .then(() => {
    console.log()
    console.log(`${green('✔')} ${bold('Server instance is ready')} 🚀`)
    console.log(`🔗 ${dim('API:')}    http://localhost:${server.port}/api`)
    console.log()
  })
  .catch(console.error)

