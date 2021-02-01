const User = require('../models/users')
const bcrypt = require('bcrypt')

module.exports = (req, res) => {

    const { email, motdepasse } = req.body

    User.findOne({ email }, (err, user) => {
        if (user) {
            
            bcrypt.compare(motdepasse, user.motdepasse, (err, same) => {
                if (same) {

                    req.session.userId = user._id
                    req.session.pseudo = user.pseudo
                    req.session.prenom = user.prenom
                    req.session.motdepasse = user.motdepasse
                    req.session.email = user.email

                    res.redirect('/')
                }
                else {
                    res.redirect('/connexion')
                }
            })

        } else {
            return res.redirect('/connexion')
        }


    })

}