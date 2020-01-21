module.exports = server => {
    const Product = server.db.models.Product;

    server.route('/product/')
        .all(server.auth.authenticate())
        .get((req, res) => {
            Product.findAll({})
                .then(users => res.json(users))
                .catch(error => res.status(412).json({msg: error.message}));
        })
        .post((req, res) => {
            Product.create(req.body)
                .then(result => res.json(result.id))
                .catch(error => res.status(412).json({msg: error.message}));
        });

    server.route('/product/:id')
        .all(server.auth.authenticate())
        .get((req, res) => {
            Product.findOne({where: req.params})
                .then(result => {
                  result
                      ? res.json(result)
                      : res.sendStatus(204)
                }).catch(error => res.status(412).json({msg: error.message}));
            })
        .put((req, res) => {
            Product.update(req.body, {where: req.params})
                .then(() => res.status(204).json({msg: 'OK'}))
                .catch(error => res.status(412).json({msg: error.message}));
            })
        .delete((req, res) => {
            Product.destroy({where: req.params})
                .then(() => res.sendStatus(204))
                .catch(error => res.status(412).json({msg: error.message}));
            });
};
