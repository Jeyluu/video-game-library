const Game = require('../models/products')


module.exports = (req, res) => {

    Game.findOne(
        { _id: req.params.id },
        function (err, transfert) {
            
            if (!err) {
                res.render('panier',{transfert,
                    
                    id: transfert.id,
                    nom: transfert.nom,
                    categorie: transfert.categorie,
                    plateforme: transfert.plateforme,
                    prix: transfert.prix,
                    image:transfert.image,
                    pseudo: req.session.pseudo
                    
                })
            } else {
                res.send(err)
            }
        }
    )
}
