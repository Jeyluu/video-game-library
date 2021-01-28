const User = require('../models/users')


module.exports = (req, res) => {

    User.create(req.body, (err, user) => {

        if(err) {

            req.flash('data', req.body)

            
            return res.redirect('/inscription')
            
        }
        res.redirect('/')
    })
}