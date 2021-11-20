class Connection {
  constructor ({ user, pass, host, port, database }) {
    this.user = user
    this.pass = pass
    this.host = host
    this.port = port
    this.database = database
  }

  find({ tableName })  {
    return tableName
  }
}

module.exports = Connection