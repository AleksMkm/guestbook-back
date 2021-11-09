const express = require('express')
const router = express.Router()

const recordsController = require('../../../controllers/records-controller')
const validate = require('./validation')

router
  .get('/', recordsController.getAllRecords)
  .post('/', validate.createRecord, recordsController.createRecord)

module.exports = router
