const Records = require('../model/records')

const { HttpCode, Status } = require('../helpers/constants')

const createRecord = async (req, res, next) => {
  try {
    const record = await Records.addRecord(req.body)
    console.log('db create record response', record)
    return res.status(HttpCode.CREATED).json({
      status: Status.SUCCESS,
      code: HttpCode.CREATED,
      data: {
        record
      }
    })
  } catch (e) {
    console.log('db create record error', e)
    next(e)
  }
}

const getAllRecords = async (req, res, next) => {
  try {
    const records = await Records.getRecords(req.query)
    return res.status(HttpCode.OK).json({
      status: Status.SUCCESS,
      code: HttpCode.OK,
      data: records
    })
  } catch (e) {
    next(e)
  }
}

module.exports = {
  createRecord,
  getAllRecords
}
