module.exports = server => {
    const State = server.db.models.State;

    server.route('/state/')
        .get((req, res) => {
            State.findAll({})
                .then(list => res.json(list))
                .catch(error => res.status(412).json({msg: error.message}));
        });

    server.route('/state/:id')
        .get((req, res) => {
            State.findOne({where: req.params})
            .then(result => {
                result
                  ? res.json(result)
                  : res.sendStatus(204)
            }).catch(error => res.status(412).json({msg: error.message}));
    });
};
