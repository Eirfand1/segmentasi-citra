module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres', 
      password: '', 
      database: 'citra',
    },
    migrations: {
      directory: './db/migrations',
    },
  },
};

