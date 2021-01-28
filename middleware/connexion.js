const User = require('../models/users')

module.exports = (req, res , next) => {

    //Connection dans la base de données
    User.findById(req.session.userId, (err, user) => {

        if(err || !user) {
            return res.redirect('/connexion')
        }
        next()
    })

    //vérification de l'utilisateur


    //s'il est dans la la base de donnée


    //sinon tu le rediriges

}