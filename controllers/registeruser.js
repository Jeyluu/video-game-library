const User = require('../models/users')

module.exports = (req, res) => {

    User.create(req.body, (err, user) => {

        if(err) {
            return res.redirect('/inscription')
        }
        res.redirect('/')
    })
}