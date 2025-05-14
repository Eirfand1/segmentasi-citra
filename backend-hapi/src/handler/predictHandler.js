const { spawn } = require('child_process')
const path = require('path')

module.exports = {
	async predict(req, h) {
		const { filename } = req.payload
		const inputPath = path.join(__dirname, '../uploads', filename)

		return new Promise((resolve, reject) => {
			const proses = spawn('python3', ['predict.py', inputPath])

			let output = ''
			let error = ''


			proses.stdout.on('data', (data) => {
				output += data.toString()
			})

			proses.stderr.on('data', (data) => {
				error += data.toString()
			})

			proses.on('close', (code) => {
				if (code === 0) {
					resolve(h.response({
						status: 'success',
						message: 'Prediction complete',
						predicted_file:`/output/${path.basename(output.trim())}` 
					}).code(200))
				} else {
					console.error(error)
					reject(h.response({
						status: 'fail',
						message: 'Prediction failed',
						error: error.trim()
					}).code(500))
				}
			})
		})
	}
}
