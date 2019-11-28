import bodyParser from "body-parser";

module.exports = server => {
  server.set('port', 3000);
  server.set('json spaces', 4);
  server.use(bodyParser.json());
  server.use((req, res, next) => {
    req.body && delete req.body.id;
    next();
  })
};
