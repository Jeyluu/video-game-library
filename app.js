const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')

const app = express();
const port = 1000;



//CONTROLLERS IMPORT

const homePage = require('./controllers/homepage');



//BODY PARSER
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

//ROUTES

app.get('/', homePage)




app.listen(port, () => {
    console.log(`Connexion au port ${port}, le ${new Date().toLocaleString()}`);
})
