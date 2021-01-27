const Game = require('../models/products')

module.exports = async (req, res) => {

    const posts = await Game.find({})
    
    res.render('product/addGame', { posts })
    
}
