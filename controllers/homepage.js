const Game = require('../models/products')

module.exports = async (req, res) => {

    const posts = await Game.find({}).limit(8).sort({nom: 1}) // .limit tri pour 8 produits  .sort tri par odre alphabetique
    
    res.render('home', { posts })
}