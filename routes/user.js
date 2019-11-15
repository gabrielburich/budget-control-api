module.exports = server => {
  const User = server.db.models.user;

  server.get('/user/', (req, res) => {
    User.findAll({}).then(users => {
      res.json(users);
    });
  });

};
