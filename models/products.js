const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    nom:String,
    categorie:String,
    plateforme:String,
    prix: Number,
    description:String,
    createDate: {
        type: Date,
        default: new Date()
    }
});





const Games = mongoose.model('product', gameSchema);

module.exports = Games