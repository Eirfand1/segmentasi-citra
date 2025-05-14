'use strict'

const Hapi = require('@hapi/hapi')
const registerAuth = require('./middleware/auth')
const registerStaticRoutes = require('./middleware/static')
const registerRoutes = require('./middleware/routes')

const init = async () => {
	const server = Hapi.server({
		port: 3000,
		host: 'localhost'
	})

	// register middleware
	await registerAuth(server)
	await registerStaticRoutes(server)
	await registerRoutes(server)

	await server.start()
	console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
	console.log(err)
	process.exit(1)
})

init()
