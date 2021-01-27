const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    prenom:{
        type:String,
        required:true
    },
    pseudo:{
        type:String,
        required:true,
        unique: true
    },
    email: {
        type:String,
        required:true,
        unique: true
    },
    motdepasse:{
        type:String,
        required:true
    },
    createDate: {
        type: Date,
        default: new Date()
    }
});



module.exports = mongoose.model('user', userSchema);