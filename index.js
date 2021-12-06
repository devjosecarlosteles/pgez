const pgez = require("./core/pgez")

const connection = pgez.connection("DEV")

console.log(connection.findOne())