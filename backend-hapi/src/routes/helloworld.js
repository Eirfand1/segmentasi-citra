const routes = [
	{
		method: 'GET',
		path : '/',
		handler: (request, h) => {
			return {
				status: 'success',
			   data: [
					"Hello Wolrd:)"	
				] 
					
			}
		}
	}
]


module.exports = routes
