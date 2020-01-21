module.exports = {
  database: 'myownstore',
  username: 'postgres',
  password: 'testes0202',
  params: {
    host: '127.0.0.1',
    dialect: 'postgres',
    timestamps: false,
    logging: false
  },
  jwtSecret: 't3st@2@2',
  jwtSession: {session: false}
};
