const pgez = require("./core/pgez")

const connection = pgez.connection("DEV")

connection.findOne("clientes", ["nome"]).then(result => console.log(result))