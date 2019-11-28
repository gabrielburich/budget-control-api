module.exports = server => {
    const StoreType = server.db.models.StoreType;

    server.route('/store-type/')
        .get((req, res) => {
            StoreType.findAll({})
            .then(list => res.json(list))
            .catch(error => res.status(412).json({msg: error.message}));
        });

    server.route('/store-type/:id')
        .get((req, res) => {
            StoreType.findOne({where: req.params})
            .then(result => {
                result
                  ? res.json(result)
                  : res.sendStatus(204)
            }).catch(error => res.status(412).json({msg: error.message}));
    });
};
