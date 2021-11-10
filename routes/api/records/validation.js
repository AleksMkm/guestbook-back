const Joi = require('joi')
const { HttpCode } = require('../../../helpers/constants')

const schemaCreateRecord = Joi.object({
  name: Joi.string().pattern(/^\w+$/).required().messages({
    'string.pattern.base': 'Only latin characters, numbers and underscore are allowed',
    'any.required': 'Field is mandatory',
    'string.empty': 'Can\'t be blank'
  }),
  message: Joi.string().required().messages({
    'any.required': 'Field is mandatory',
    'string.empty': 'Can\'t be blank'
  })
})

const validate = (schema, obj, next) => {
  const { error } = schema.validate(obj)
  if (error) {
    const [{ context, message }] = error.details
    const field = context.label
    return next({
      status: HttpCode.BAD_REQUEST,
      message: {
        [field]: message
      }
    })
  }
  next()
}

module.exports.createRecord = (req, _res, next) => {
  return validate(schemaCreateRecord, req.body, next)
}
