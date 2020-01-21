module.exports = server => {
    const User = server.db.models.User;

    server.route('/user/')
        .all(server.auth.authenticate())
        .get((req, res) => {
            User.findAll({})
                .then(users => res.json(users))
                .catch(error => res.status(412).json({msg: error.message}));
        })
        .post((req, res) => {
            User.create(req.body)
                .then(result => res.json(result.id))
                .catch(error => res.status(412).json({msg: error.message}));
        });

    server.route('/user/:id')
        .all(server.auth.authenticate())
        .get((req, res) => {
            User.findOne({where: req.params})
                .then(result => {
                  result
                      ? res.json(result)
                      : res.sendStatus(204)
                }).catch(error => res.status(412).json({msg: error.message}));
            })
        .put((req, res) => {
            User.update(req.body, {where: req.params})
                .then(() => res.status(204).json({msg: 'OK'}))
                .catch(error => res.status(412).json({msg: error.message}));
            })
        .delete((req, res) => {
            User.destroy({where: req.params})
                .then(() => res.sendStatus(204))
                .catch(error => res.status(412).json({msg: error.message}));
            });
};
