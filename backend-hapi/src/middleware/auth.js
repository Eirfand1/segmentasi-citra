'use strict'
const Jwt = require('@hapi/jwt')

const registerAuth = async (server) => {
  await server.register(Jwt)

  server.auth.strategy('jwt', 'jwt', {
    keys: 'RAHASIA_BANGET',
    verify: {
      aud: false,
      iss: false,
      sub: false,
      maxAgeSec: 86400,
    },
    validate: async (artifacts) => {
      return {
        isValid: true,
        credentials: {
          user: artifacts.decoded.payload
        }
      }
    }
  })

  server.auth.default('jwt')
}

module.exports = registerAuth
