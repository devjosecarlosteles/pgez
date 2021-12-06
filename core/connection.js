const connectionAdapter = require("../adapter/connection/connectionAdapter")


class Connection {
  constructor (namaspace) {
    this.credentials = connectionAdapter(namaspace)

    console.log(this.credentials)
  }
}

module.exports = Connection