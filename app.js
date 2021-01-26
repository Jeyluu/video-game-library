const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')

const app = express();
const port = 1000;



/* -------------------------------------------------------------------------------------------- */
//EXPRESS-STATIC
app.use(express.static('public'));

//BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//EXPRESS HANDLEBARS
// Handlebars
app.engine('hbs', exphbs({defaultLayout: 'main', extname: 'hbs'}));
app.set('view engine', 'hbs')

// CONNECTION MONGO
mongoose.connect('mongodb://localhost:27017/videoGame',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

/* -------------------------------------------------------------------------------------------- */


//CONTROLLERS IMPORT
const homePage = require('./controllers/homepage');
const addagame = require('./controllers/addgame');
const postagame = require('./controllers/postgame');


//ROUTES

app.get('/', homePage);

//Jeu & Produits
app.get('/jeu/ajout', addagame) // le premier argument est ce que nous mettons dans la navbar
app.post('/jeu/publication', postagame)


//Utilisateur & client


app.listen(port, () => {
    console.log(`Connexion au port ${port}, le ${new Date().toLocaleString()}`);
})
