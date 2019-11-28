module.exports = server => {
    const Card = server.db.models.Card;

    server.route('/card/')
        .get((req, res) => {
            Card.findAll({})
                .then(users => res.json(users))
                .catch(error => res.status(412).json({msg: error.message}));
        })
        .post((req, res) => {
            Card.create(req.body)
                .then(result => res.json(result.id))
                .catch(error => res.status(412).json({msg: error.message}));
        });

    server.route('/card/:id')
        .get((req, res) => {
            Card.findOne({where: req.params})
                .then(result => {
                  result
                      ? res.json(result)
                      : res.sendStatus(204)
                }).catch(error => res.status(412).json({msg: error.message}));
            })
        .put((req, res) => {
            Card.update(req.body, {where: req.params})
                .then(() => res.status(204).json({msg: 'OK'}))
                .catch(error => res.status(412).json({msg: error.message}));
            })
        .delete((req, res) => {
            Card.destroy({where: req.params})
                .then(() => res.sendStatus(204))
                .catch(error => res.status(412).json({msg: error.message}));
            });
};
