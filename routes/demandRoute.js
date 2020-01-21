module.exports = server => {
    const Demand = server.db.models.Demand;

    server.route('/demand/')
        .all(server.auth.authenticate())
        .post((req, res) => {
            Demand.create(req.body)
                .then(result => res.json(result.id))
                .catch(error => res.status(412).json({msg: error.message}));
        });

    server.route('/demand/:id')
        .all(server.auth.authenticate())
        .get((req, res) => {
            Demand.findOne({where: req.params})
                .then(result => {
                  result
                      ? res.json(result)
                      : res.sendStatus(204)
                }).catch(error => res.status(412).json({msg: error.message}));
            })
        .put((req, res) => {
            Demand.update(req.body, {where: req.params})
                .then(() => res.status(204).json({msg: 'OK'}))
                .catch(error => res.status(412).json({msg: error.message}));
            })
        .delete((req, res) => {
            Demand.destroy({where: req.params})
                .then(() => res.sendStatus(204))
                .catch(error => res.status(412).json({msg: error.message}));
            });
};
