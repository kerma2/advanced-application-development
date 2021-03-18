require('dotenv').config()

import bodyParser from 'body-parser'
import express from 'express'

const port = process.env.PORT || 3000

const app = express()

app.use(bodyParser())

const router = express.Router()
const store = { message: 'init' }

router.get('/', (req, res) => res.send({ message: store.message}))
router.post('/', (req, res) => {
  if (!req.body || !req.body.message || typeof req.body.message !== 'string') throw new Error('Invalid body')

  store.message = req.body.message

  res.send({ success: true })
})

app.use('/api', router)

export default {
  port,
  listen: async () =>  app.listen(port)
}
