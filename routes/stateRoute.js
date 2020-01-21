module.exports = server => {
    const State = server.db.models.State;

    server.route('/state/')
        .all(server.auth.authenticate())
        .get((req, res) => {
            State.findAll({})
                .then(list => res.json(list))
                .catch(error => res.status(412).json({msg: error.message}));
        });

    server.route('/state/:id')
        .all(server.auth.authenticate())
        .get((req, res) => {
            State.findOne({where: req.params})
            .then(result => {
                result
                  ? res.json(result)
                  : res.sendStatus(204)
            }).catch(error => res.status(412).json({msg: error.message}));
    });
};
