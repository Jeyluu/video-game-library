const User = require('../models/users')

module.exports = (req, res) => {

    User.create(req.body, (err, user) => {
        res.redirect('/')
    })
}