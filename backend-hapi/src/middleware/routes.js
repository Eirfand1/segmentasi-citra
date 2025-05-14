'use strict'
const registerRoutes = async (server) => {
	const helloworld = require('../routes/helloworld')
	const userRoutes = require('../routes/userRoutes')
	const uploadRoutes = require('../routes/uploadRoutes')
	const predictRoutes = require('../routes/predictRoutes')
	
	server.route(helloworld)
	server.route(userRoutes)
	server.route(uploadRoutes)
	server.route(predictRoutes)
}

module.exports = registerRoutes
