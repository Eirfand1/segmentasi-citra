'use strict'
const Inert = require('@hapi/inert')
const path = require('path')

const registerStaticRoutes = async (server) => {
  await server.register(Inert)

  server.route({
    method: 'GET',
    path: '/images/{filename}',
    handler: {
      file: (request) => {
        const filename = request.params.filename
        return path.join(__dirname, '../uploads', filename)
      }
    },
    options: {
      auth: false
    }
  })
}

module.exports = registerStaticRoutes
