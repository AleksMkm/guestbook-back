const express = require('express')
const router = express.Router()

const recordsController = require('../../../controllers/records-controller')
const validate = require('./validation')

router
  // .get('/', recordsController.getAll)
  .post('/', validate.createRecord, recordsController.create)

module.exports = router
