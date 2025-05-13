'use strict'
const registerRoutes = async (server) => {
  const helloworld = require('../routes/helloworld')
  const userRoutes = require('../routes/userRoutes')
  const uploadRoutes = require('../routes/uploadRoutes')

  server.route(helloworld)
  server.route(userRoutes)
  server.route(uploadRoutes)
}

module.exports = registerRoutes
