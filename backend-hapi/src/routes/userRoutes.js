const userHandler = require('../handler/userHandler.js~')

module.exports = [
	{
		method: 'POST',
		path: '/register',
		handler: userHandler.register,
		options: {
			auth: false
		}
	},
	{
		method: 'POST',
		path: '/login',
		handler: userHandler.login,
		options: {
			auth: false
		}
	},
	{
		method: 'GET',
		path: '/me',
		handler: userHandler.me,
		options: {
			auth: 'jwt'
		}
	}
]

