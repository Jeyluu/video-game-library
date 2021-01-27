const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const Handlebars = require('handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const override = require('method-override')
const fileUpload = require('express-fileupload')


const app = express();
const port = 1000;



/* -------------------------------------------------------------------------------------------- */
//EXPRESS-STATIC
app.use(express.static('public'));

//EXPRESS-FILE UPLOAD
app.use(fileUpload())

//Method-override
app.use(override("_method"));

//BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//EXPRESS HANDLEBARS
// Handlebars
app.engine('hbs', exphbs({defaultLayout: 'main', extname: 'hbs', handlebars: allowInsecurePrototypeAccess(Handlebars)}));
app.set('view engine', 'hbs')

// CONNECTION MONGO
mongoose.connect('mongodb://localhost:27017/videoGame',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})

/* -------------------------------------------------------------------------------------------- */


//CONTROLLERS IMPORT
const homePage = require('./controllers/homepage');
const addagame = require('./controllers/addgame');
const postagame = require('./controllers/postgame');
const geteditagame = require('./controllers/geteditgame')
const editagame = require('./controllers/editgame')
const deleteOnegame = require('./controllers/deletegame')

//ROUTES

app.get('/', homePage);

//Jeu & Produits
app.get('/jeu/ajout', addagame) // le premier argument est ce que nous mettons dans la navbar
app.post('/jeu/publication', postagame)
app.get('/jeu/:id',geteditagame)
app.put('/jeu/:id',editagame)
app.delete('/jeu/:id', deleteOnegame)



//Utilisateur & client


app.listen(port, () => {
    console.log(`Connexion au port ${port}, le ${new Date().toLocaleString()}`);
})
