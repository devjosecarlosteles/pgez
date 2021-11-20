# PGEZ

## Conexão 

    const connect = pgez.connection({
      host: "localhost",
      port: 3333,
      user: "jose",
      pass: 123,
      database: "banco"
    })

## Select

Consulta simples

    console.log(await connect.find({ tableName: "tabela1" }))1