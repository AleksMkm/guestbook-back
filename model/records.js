const Record = require('./schemas/record')

const addRecord = async (body) => {
  const result = await Record.create(body)
  return result
}

module.exports = {
  addRecord
}
