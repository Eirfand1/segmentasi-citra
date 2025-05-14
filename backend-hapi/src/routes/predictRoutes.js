const predictHandler = require('../handler/predictHandler')

module.exports = [
	{
		method: 'POST',
		path: '/predict',
		handler: predictHandler.predict,
		options: {
			auth: 'jwt'
		}
	}
]
