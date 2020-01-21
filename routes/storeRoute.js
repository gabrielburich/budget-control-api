module.exports = server => {
    const Store = server.db.models.Store;

    server.route('/store/')
        .all(server.auth.authenticate())
        .get((req, res) => {
            Store.findAll({where: req.query.filter})
                .then(list => res.json(list))
                .catch(error => res.status(412).json({msg: error.message}));
        })
        .post((req, res) => {
            Store.create(req.body)
                .then(result => res.json(result.id))
                .catch(error => res.status(412).json({msg: error.message}));
        });

    server.route('/store/:id')
        .all(server.auth.authenticate())
        .get((req, res) => {
            Store.findOne({where: req.params})
                .then(result => {
                    result
                    ? res.json(result)
                    : res.sendStatus(204)
                }).catch(error => res.status(412).json({msg: error.message}));
        })
        .put((req, res) => {
            Store.update(req.body, {where: req.params})
                .then(() => res.status(204).json({msg: 'OK'}))
                .catch(error => res.status(412).json({msg: error.message}));
            })
        .delete((req, res) => {
            Store.destroy({where: req.params})
                .then(() => res.sendStatus(204))
                .catch(error => res.status(412).json({msg: error.message}));
        });
};
