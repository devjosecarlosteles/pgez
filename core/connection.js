const connectionAdapter = require("../adapter/connection/connectionAdapter")
const findOne = require("../tasks/findOne/findOne")

const { Pool } = require("pg")    

class Connection {
  constructor (namaspace) {
    this.credentials = connectionAdapter(namaspace)
  }

  async connection () {
    if(global.connection) return global.connection.connect()

    const { USER, PASS, HOST, PORT, DATABASE } = this.credentials

    let connectionString = `postgres://${ USER }:${ PASS }@${ HOST }/${ DATABASE }`

    if(PORT) connectionString = `postgres://${ USER }:${ PASS }@${ HOST }:${ PORT }/${ DATABASE }`

    const pool = new Pool({
      connectionString: connectionString
    })

    global.connection = pool
    
    return pool.connect()
  }

  async findOne(tableName, columns, where) {
    const connect = await this.connection()
    return connect.query(findOne(tableName, columns, where))
  }
}

module.exports = Connection