const Record = require('./schemas/record')

const addRecord = async (body) => {
  const result = await Record.create(body)
  return result
}

const getRecords = async ({ sortBy, sortByDesc, limit = '5', page = '1' }) => {
  const result = await Record.paginate(
    {},
    {
      limit,
      page,
      sort: {
        ...(sortBy ? { [`${sortBy}`]: 1 } : {}),
        ...(sortByDesc ? { [`${sortByDesc}`]: -1 } : {})
      }
    }
  )
  console.log('get records result', result)

  const { docs: records, totalDocs: total } = result
  return { total: total.toString(), limit, page, records }
}

module.exports = {
  addRecord,
  getRecords
}
