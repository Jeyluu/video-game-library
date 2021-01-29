const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const Handlebars = require('handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const override = require('method-override')
const fileUpload = require('express-fileupload')
const expressSession = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash');


const app = express();
const port = 1000;



/* -------------------------------------------------------------------------------------------- */
//EXPRESS-STATIC
app.use(express.static('public'));

// CONNECTION MONGO
mongoose.connect('mongodb://localhost:27017/videoGame',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})

//CONNECT-MONGO
const mongoStore = MongoStore(expressSession)

//EXPRESS-STATIC
app.use(expressSession({
    secret: 'securite',
    name: 'pepite',
    saveUninitialized: true,
    resave: false,

//stocker les cookies sur mongoDb

    store: new mongoStore(
        {mongooseConnection: mongoose.connection} 
    )
}))

//CONNECT-FLASH
app.use(flash())

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



/* -------------------------------------------------------------------------------------------- */
//MIDDLEWARE
const articleValidPost = require('./middleware/gamevalidpost')
app.use("/articles/post",articleValidPost)
const connexion = require('./middleware/connexion')
app.use('/jeu/ajout', connexion)
app.use('*', (req, res , next) => {
    res.locals.user = req.session.userId;
    
    next()
} )


//CONTROLLERS ARTICLE
const homePage = require('./controllers/homepage');
const addagame = require('./controllers/addgame');
const postagame = require('./controllers/postgame');
const geteditagame = require('./controllers/geteditgame')
const editagame = require('./controllers/editgame')
const deleteOnegame = require('./controllers/deletegame')

//CONTROLLERS UTILISATEUR
const adduser = require('./controllers/adduser')
const userregister = require('./controllers/registeruser')
const displaylogin = require('./controllers/displaylogin')
const userlogin = require('./controllers/postloginuser')
const userLogout = require('./controllers/userLogout')

//ROUTES

app.get('/', homePage);

//Jeu & Produits
app.get('/jeu/ajout',connexion, addagame) // le premier argument est ce que nous mettons dans la navbar
app.post('/jeu/publication',connexion, postagame)
app.get('/jeu/:id',geteditagame)
app.put('/jeu/:id',editagame)
app.delete('/jeu/:id', deleteOnegame)



//Utilisateur & client
app.get('/inscription', adduser)
app.post('/inscription/utilisateur', userregister)
app.get('/connexion', displaylogin)
app.post('/connexion/utilisateur', userlogin)
app.get('/deconnexion', userLogout )


app.listen(port, () => {
    console.log(`Connexion au port ${port}, le ${new Date().toLocaleString()}`);
})
