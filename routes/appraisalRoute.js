module.exports = server => {
    const Appraisal = server.db.models.Appraisal;

    server.route('/appraisal/')
        .get((req, res) => {
            Appraisal.findAll({})
                .then(users => res.json(users))
                .catch(error => res.status(412).json({msg: error.message}));
        })
        .post((req, res) => {
            Appraisal.create(req.body)
                .then(result => res.json(result.id))
                .catch(error => res.status(412).json({msg: error.message}));
        });

    server.route('/appraisal/:id')
        .get((req, res) => {
            Appraisal.findOne({where: req.params})
                .then(result => {
                  result
                      ? res.json(result)
                      : res.sendStatus(204)
                }).catch(error => res.status(412).json({msg: error.message}));
            })
        .put((req, res) => {
            Appraisal.update(req.body, {where: req.params})
                .then(() => res.status(204).json({msg: 'OK'}))
                .catch(error => res.status(412).json({msg: error.message}));
            })
        .delete((req, res) => {
            Appraisal.destroy({where: req.params})
                .then(() => res.sendStatus(204))
                .catch(error => res.status(412).json({msg: error.message}));
            });
};
