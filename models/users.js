const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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

//Cryptage du mot de passe

userSchema.pre('save', function (next) {

    const user = this

    bcrypt.hash(user.motdepasse, 10, (error, encrypted) => {
        user.motdepasse = encrypted
        next()
    })
})

const User = mongoose.model('user', userSchema);
module.exports = User
