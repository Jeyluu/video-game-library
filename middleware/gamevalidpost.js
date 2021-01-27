module.exports = (req,res, next) => {

    //Ce middleware permet de poster malgré le manque d'image
    
    if(!req.files) {
        return res.redirect('/')
    }
    next()
}