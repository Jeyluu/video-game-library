const mongoose = require('mongoose')

const gamecartSchema = new mongoose.Schema({
    nom:String,
    categorie:String,
    plateforme:String,
    prix: Number,
    image:String,
    createDate: {
        type: Date,
        default: new Date()
    }
});





const GamesCart = mongoose.model('panier', gamecartSchema);

module.exports = GamesCart