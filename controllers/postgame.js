const Game = require('../models/products')

module.exports = (req, res) => {

    Game.create(req.body, (err, post) => {
        res.redirect('/')
    })
    
}