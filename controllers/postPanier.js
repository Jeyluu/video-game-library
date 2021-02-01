const GamesCart = require('../models/products')

const path = require('path')

module.exports = (req, res) => {
    console.log(req.body);
    res.redirect('/panier')
}