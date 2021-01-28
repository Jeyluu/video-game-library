

module.exports = (req,res) => {

    

    res.render('register', {

        //On renvoit les données tapé par l'utilisateur dans le formulaire pour qu'il n'est a le retaper.
        //le[0] nous aide à sélectioner lobjet data dans le tableau. exemple du consolelog req.flash('data'): [ { prenom: '', pseudo: '', email: '', motdepasse: '' } ]
        
        data : req.flash('data')[0]
    })
}