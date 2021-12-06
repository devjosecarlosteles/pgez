const errorMessage = require("../../error/findOne.json")
const selectQuery = require("../utils/selectQuery")

function findOne(tableName, columns, where) {
  if(!tableName) throw new Error(errorMessage.tableName)

  if(!columns) {
    const query = `SELECT * FROM ${ tableName } LIMIT 1`
    return query
  }

  const query = `SELECT ${ selectQuery(columns, where) } FROM ${ tableName } LIMIT 1`
  return query
}

module.exports = findOne