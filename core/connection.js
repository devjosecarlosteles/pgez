const connectionAdapter = require("../adapter/connection/connectionAdapter")
const findOne = require("../tasks/findOne/findOne")


class Connection {
  constructor (namaspace) {
    this.credentials = connectionAdapter(namaspace)
  }

  static async connection () {
    // const { Pool }

    // return
  }

  async findOne() {
    return findOne("clientes", ["nome", "idade", "uf"])
  }
}

module.exports = Connection