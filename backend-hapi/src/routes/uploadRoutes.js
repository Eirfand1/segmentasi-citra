const uploadHandler = require('../handler/uploadHandler')

module.exports = [
	{
		method: 'POST',
		path: '/upload',
		handler: uploadHandler.upload,
		options: {
			payload: {
				output: 'stream',
				parse: true,
				allow: 'multipart/form-data',
				maxBytes: 1024 * 1024 * 50,
				multipart: true
			},
			auth: 'jwt'	
		}
		
	},

	{
		method: 'GET',
		path: '/uploads',
		handler: uploadHandler.list,
		options: {
			auth: 'jwt'
		}
	}
]
