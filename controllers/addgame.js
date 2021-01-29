const Game = require('../models/products')

module.exports = async (req, res) => {

        if(req.session.userId){
            const posts = await Game.find({})
    
            return res.render('product/addGame', { posts,pseudo: req.session.pseudo })
        }
        res.redirect("/connexion")
    
    
}
