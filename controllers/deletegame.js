const Game = require('../models/products')

module.exports = (req,res) => {
    
    Game.deleteOne(

        {_id: req.params.id},

        function(err) {
            if(!err) {
                res.redirect('/jeu/ajout')
            } else {
                res.send(err)
            }
        }
    )
}