module.exports = server => {
    const City = server.db.models.City;

    server.route('/city/')
        .get((req, res) => {
            City.findAll({})
                .then(list => res.json(list))
                .catch(error => res.status(412).json({msg: error.message}));
        });

    server.route('/city/:id')
        .get((req, res) => {
            City.findOne({where: req.params})
            .then(result => {
                result
                  ? res.json(result)
                  : res.sendStatus(204)
            }).catch(error => res.status(412).json({msg: error.message}));
    });
};
