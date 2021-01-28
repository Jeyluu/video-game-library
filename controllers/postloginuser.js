const usermodel = require('../models/users')
const bcrypt = require('bcrypt')

module.exports = (req, res) => {

    const { email, motdepasse } = req.body

    usermodel.findOne({ email }, (err, user) => {
        if (user) {
            
            bcrypt.compare(motdepasse, user.motdepasse, (err, same) => {
                if (same) {
                    req.session.userId = user._id
                    
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