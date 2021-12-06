let fileConnections

try {
  fileConnections = require("../../pgez.connections.json")
} catch (err) {
  fileConnections = null
}

function connectionAdapter (namespace) {
  if(fileConnections) {
    if(!namespace) namespace = fileConnections.DEFAULT_NAMESPACE

    const credentials = {
      USER: fileConnections[`${ namespace }_USER`],
      PASS: fileConnections[`${ namespace }_PASS`],
      HOST: fileConnections[`${ namespace }_HOST`],
      PORT: fileConnections[`${ namespace }_PORT`],
      DATABASE: fileConnections[`${ namespace }_DATABASE`]
    }

    return credentials
  }
}

module.exports = connectionAdapter