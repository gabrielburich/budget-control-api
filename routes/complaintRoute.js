module.exports = server => {
    const Complaint = server.db.models.Complaint;

    server.route('/complaint/')
        .get((req, res) => {
            Complaint.findAll({})
                .then(users => res.json(users))
                .catch(error => res.status(412).json({msg: error.message}));
        })
        .post((req, res) => {
            Complaint.create(req.body)
                .then(result => res.json(result.id))
                .catch(error => res.status(412).json({msg: error.message}));
        });

    server.route('/complaint/:id')
        .get((req, res) => {
            Complaint.findOne({where: req.params})
                .then(result => {
                  result
                      ? res.json(result)
                      : res.sendStatus(204)
                }).catch(error => res.status(412).json({msg: error.message}));
            })
        .put((req, res) => {
            Complaint.update(req.body, {where: req.params})
                .then(() => res.status(204).json({msg: 'OK'}))
                .catch(error => res.status(412).json({msg: error.message}));
            })
        .delete((req, res) => {
            Complaint.destroy({where: req.params})
                .then(() => res.sendStatus(204))
                .catch(error => res.status(412).json({msg: error.message}));
            });
};
