const Joi = require('joi')
const { HttpCode } = require('../../../helpers/constants')

const schemaCreateRecord = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  message: Joi.string().required()
})

const validate = (schema, obj, next) => {
  const { error } = schema.validate(obj)
  if (error) {
    const [{ message }] = error.details
    return next({
      status: HttpCode.BAD_REQUEST,
      message: `Field ${message.replace(/"/g, '')}`
    })
  }
  next()
}

module.exports.createRecord = (req, _res, next) => {
  return validate(schemaCreateRecord, req.body, next)
}
