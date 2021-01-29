const Game = require('../models/products')


module.exports = (req, res) => {
    
    Game.updateOne(
        
        //argument condition
        { _id: req.params.id },

        //argument update
        {
            nom: req.body.nom,
            categorie: req.body.categorie,
            plateforme: req.body.plateforme,
            prix: req.body.prix,
            description: req.body.description,
        },
        //argument option
        { multi: true }, //multi veut dire que l'on veut modifier plusieurs chose en même temps.
        //argument execution
        (err) => {
            if (!err) {
                res.redirect('/jeu/ajout')

            }
            else {
                res.send(err)
            }
        }
    )
}