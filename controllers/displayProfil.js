const usermodel = require('../models/users')

module.exports = (req, res) => {

    usermodel.findOne(
        { _id: req.params.id },
        (err, recup) => {
            console.log(req.session);
            if(!err) {
                res.render('profil', {
                                    
                            prenom: req.session.prenom,
                            pseudo: req.session.pseudo,
                            email: req.session.email,
                            motdepasse: req.session.motdepasse,
                    })}
                    else {
                        res.send(err)} 

        }
        )
}

    
