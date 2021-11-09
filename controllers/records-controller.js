const Records = require('../model/records')

const { HttpCode, Status } = require('../helpers/constants')

async function create(req, res, next) {
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

module.exports = {
  create
}
