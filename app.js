const express = require('express')
const logger = require('morgan')
const cors = require('cors')
require('dotenv').config()

const recordsRouter = require('./routes/api/records')
const { HttpCode, Status } = require('./helpers/constants')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.get('env') !== 'test' && app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/records', recordsRouter)

app.use((_req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, _req, res, _next) => {
  res.status(err.status || HttpCode.INTERNAL_SERVER_ERROR).json({
    status: Status.ERROR,
    code: err.status || HttpCode.INTERNAL_SERVER_ERROR,
    message: err.message
  })
})

module.exports = app
