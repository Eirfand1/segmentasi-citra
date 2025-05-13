const fs = require('fs')
const path = require('path')
const knex = require('../db/knex')

module.exports = {
	async upload(req, h) {
		const { file } = req.payload
		const { id: user_id } = req.auth.credentials.user

		const filename = file.hapi.filename
		const relativePath = path.join('uploads', filename)
		const uploadPath = path.join(__dirname, '../', relativePath)
		const fileStream = fs.createWriteStream(uploadPath)

		try {
			await new Promise((resolve, reject) => {
				file.pipe(fileStream)
				file.on('end', resolve)
				file.on('error', reject)
			})

			await knex('uploads').insert({
				user_id,
				file_name: filename,
				file_path: relativePath,
			})

			return h.response({
				status: 'success',
				message: 'Sukses upload dan simpan metadata',
				filename
			}).code(201)

		} catch (err) {
			console.error(err)
			return h.response({
				status: 'fail',
				message: 'Upload Error'
			}).code(500)
		}
	},
	async list(req, h) {
		const { id: user_id } = req.auth.credentials.user

		const uploads = await knex('uploads')
			.where({ user_id })
			.orderBy('uploaded_at', 'desc')


		const withUrl = uploads.map(upload => ({
			id: upload.id,
			file_name: upload.file_name,
			uploaded_at: upload.uploaded_at,
			url: `/images/${upload.file_name}`
		}))

		return h.response({
			status: 'success',
			data: withUrl
		})
	}
}
