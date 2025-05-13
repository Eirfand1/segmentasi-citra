const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db/knex');

const JWT_SECRET = 'RAHASIA_BANGET';

module.exports = {
	register: async (request, h) => {
		const { name, email, password } = request.payload;

		const existing = await db('users').where({ email }).first();
		if (existing) {
			return h.response({ message: 'Email sudah terdaftar' }).code(409);
		}

		const hashed = await bcrypt.hash(password, 10);

		const [user] = await db('users')
			.insert({
				name,
				email,
				password_hash: hashed,
			})
			.returning(['id', 'name', 'email']);

		return h.response({ message: 'Registrasi berhasil', user }).code(201);
	},

	login: async (request, h) => {
		const { email, password } = request.payload;

		const user = await db('users').where({ email }).first();
		if (!user) {
			return h.response({ message: 'Email tidak ditemukan' }).code(401);
		}

		const valid = await bcrypt.compare(password, user.password_hash);
		if (!valid) {
			return h.response({ message: 'Password salah' }).code(401);
		}

		const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
			expiresIn: '1d',
		});

		return { message: 'Login berhasil', token };
	},

	me: async (request, h) => {
		const { user } = request.auth.credentials;
		const profile = await db('users').where({ id: user.id }).first();

		if (!profile) return h.response({ message: 'User tidak ditemukan' }).code(404);

		return {
			id: profile.id,
			name: profile.name,
			email: profile.email,
		};
	},
};
