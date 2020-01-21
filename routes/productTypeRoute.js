module.exports = server => {
    const ProductType = server.db.models.ProductType;

    server.route('/product-type/')
        .all(server.auth.authenticate())
        .get((req, res) => {
            ProductType.findAll({})
            .then(list => res.json(list))
            .catch(error => res.status(412).json({msg: error.message}));
        });

    server.route('/product-type/:id')
        .all(server.auth.authenticate())
        .get((req, res) => {
            ProductType.findOne({where: req.params})
            .then(result => {
                result
                  ? res.json(result)
                  : res.sendStatus(204)
            }).catch(error => res.status(412).json({msg: error.message}));
    });
};
