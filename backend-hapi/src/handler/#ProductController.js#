const db =  require('../db/knex')

const getAllProductsHandler = async (req, h) => {
	try {
		query =  await db('products').select('*')	

		if(query.length == 0) {
			return h.response({
				success: false,
				message: "No Products found"
			}).code(404)
		}

		return h.response({
			success: true,
			data: query
		}).code(200)


	}catch(err) {
		console.error(err)
		return h.response({
			success: false,
			message: 'internal server error'
		})
	}
}

const addProductHandler = async (req, h) => {
	try {
		const { name, stock, supplier_id } = req.payload

		if (!name || !stock || !supplier_id) {
			return h.response({
				success: false,
				message: 'name, stock, and supplier_id are required.'
			}).code(400)
		}

		const query = await db('products')
			.insert({ name, stock, supplier_id })
			.returning('*')

		return h.response({
			success: true,
			data: query 
		}).code(201)

	} catch (err) {
		console.error(err)
		return h.response({
			success: false,
			message: err.message
		}).code(500)
	}
}


const updateLowStock = async (req, h) => {
	try {

		const { id } = req.params

		if(!id) {
			return h.response({
				success: false,
				message: "Parameter ID are required"
			})
		}

		query =  await db('products').where({id}).update({ is_low_stock: true }).returning('*')

		return h.response({
			success: false,
			data: query
		})

	}catch(err) {
		console.error(err)
		return h.response({
			success: false,
			message: "Internal server error"
		}).code(500)
	}
}


module.exports = {
	getAllProductsHandler,
	addProductHandler,
	updateLowStock
}
