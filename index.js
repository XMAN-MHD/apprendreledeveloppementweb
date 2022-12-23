/*
    references to modules
*/ 
    // packages
const  express = require('express');
const  ejs = require('ejs');
    //controllers 
const indexController = require('./controllers/index');
const contactezMoiController = require('./controllers/contactezMoi');
const seConnecterController = require('./controllers/seConnecter');
const inscrireController = require('./controllers/inscrire');
const publierController = require('./controllers/publier');
const mesCoursController = require('./controllers/mesCours');
const monCompteController = require('./controllers/monCompte');
/*
    server
*/
const app = new express();
/*
    port
*/
let port = process.env.PORT || 4000;
app.listen(port, () => {console.log('Express server listening on port 4000')});
/*
    provide the static files
*/
app.use(express.static('public')); 
/*
    set a view engine(ejs)
*/ 
app.set('view engine', 'ejs');

/*
    handle get request
*/ 
app.get('/', indexController);
app.get('/contactez-moi', contactezMoiController);
app.get('/auth/connexion', seConnecterController);
app.get('/auth/inscription', inscrireController);
app.get('/articles/publier', publierController);
app.get('/mescours', mesCoursController);
app.get('/users/account:id', monCompteController);
