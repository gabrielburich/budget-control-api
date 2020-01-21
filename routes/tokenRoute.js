import jwt from "jwt-simple";

module.exports = server => {
    const configuration = server.libs.config;
    const User = server.db.models.User;

    server.post('/token/', (req, res) => {
        if (req.body.email && req.body.password) {
            const {email, password} = req.body;

            User.findOne({where: {email: email}})
                .then(user => {
                    if (User.isPassword(user.password, password)) {
                        const payload = {id: user.id};
                        res.json({token: jwt.encode(payload, configuration.jwtSecret)});
                    } else {
                        res.sendStatus(401);
                    }
                })
                .catch(error => {
                    console.error(error);
                    res.sendStatus(401);
                })
        } else {
            res.sendStatus(401);
        }
    })
};