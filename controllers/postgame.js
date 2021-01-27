const Game = require('../models/products')
const path = require('path')

module.exports = (req, res) => {
    
    //Nous permet de stocker les images dans public / images 
    const { image } = req.files
    const uploadFile = path.resolve(__dirname,'..', 'public/images', image.name);

    image.mv(uploadFile, (error) => {

        Game.create(
            {
                //Pour enregister l'image dans la Base de Données
                ...req.body,
                image : `/images/${image.name}`
            }

            , (err, post) => {
                    res.redirect('/')
                }
            
        )
    })
}