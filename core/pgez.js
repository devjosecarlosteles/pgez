const Connection = require("./connection")

class PGEZ {
  static connection = (namespace) => new Connection(namespace)
}

module.exports = PGEZ