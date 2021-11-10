const Record = require('./schemas/record')

const addRecord = async (body) => {
  const result = await Record.create(body)
  return result
}

const getRecords = async () => {
  const results = await Record.find({}).sort({ createdAt: -1 })
  return results
}

module.exports = {
  addRecord,
  getRecords
}
