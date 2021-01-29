
module.exports = (req, res) => {
    res.render('panier', {pseudo: req.session.pseudo})
}