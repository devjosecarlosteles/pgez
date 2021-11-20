const Connection = require("./core/connection/connection")

class Pgez {
  static connection = ({
    user, pass, host, port, database
  }) => new Connection({ user, pass, host, port, database }) 
}

module.exports = Pgez