function selectQuery(columns, where) {
  const query = []

  for (let key in columns) {
    query.push(columns[key])
  }

  return query.join()
}

module.exports = selectQuery