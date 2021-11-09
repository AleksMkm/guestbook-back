const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const recordSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please introduce yourself']
    },
    message: {
      type: String,
      required: [true, 'Please enter a message']
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

recordSchema.plugin(mongoosePaginate)

const Record = model('record', recordSchema)

module.exports = Record
