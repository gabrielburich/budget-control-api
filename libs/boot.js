module.exports = server => {
  server.db.sequelize.sync().done(() => {
    server.listen(server.get('port'), () => {
      console.log('My Own Store API start on port ' + server.get('port'))
    });
  });
};
