/*
    define global variables
*/
global.LoggedIn = false;     
/*
    references to modules
*/ 
    // packages
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressFileUpload = require('express-fileupload');
const expressSession = require('express-session');
    //controllers 
const homeController = require('./controllers/home');
const contactezMoiController = require('./controllers/contactezMoi');
const authLoginController = require('./controllers/authLogin');
const newUserController = require('./controllers/newUser');
const newPostController = require('./controllers/newPost');
const coursesController = require('./controllers/courses');
const userController = require('./controllers/user');
const storeUserController = require('./controllers/storeUser');
const userLoginController = require('./controllers/userLogin');
const logoutUserController = require('./controllers/logoutUser');
const storePostController = require('./controllers/storePost');
    //custom middlewares 
const checkEmptyRegistrationFieldsMiddleware = require('./middlewares/checkEmptyRegistrationFields'); 
const checkEmptyLoginFieldsMiddleware = require('./middlewares/checkEmptyLoginFields'); 
const keepUsersOutMiddleware = require('./middlewares/keepUsersOut'); 
const keepVisitorsOutMiddleware = require('./middlewares/keepVisitorsOut');
/*
    server
*/
const app = new express();
/*
    connect to my mongo databasse server
*/
mongoose.set('strictQuery', true);
mongoose.connect(
    'mongodb://localhost:27017/2mdBlog', 
    {useNewUrlParser: true},
    (e) => {
        if(e){
            console.error(e);
        }else{
            console.log('Connected to MongoDB');
        }
    }
)
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
    middlewares
*/
    // middleware body-parser.json() and body-parser.urlencoded() parse the req.body to make available form datas 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
    // middleware express-fileupload upload the files into the req.file object
app.use(expressFileUpload());
    // custom middleware checkEmptyFields from user registration and login interface
app.use("/users/new", checkEmptyRegistrationFieldsMiddleware); 
app.use("/users/login", checkEmptyLoginFieldsMiddleware);
    // middleware express-session use the req.session object to save the session ID into browser's cookies then sign the user and encrypt its sessionID to keep the user log in
app.use(expressSession({secret: 'keyboard cat'}));  
    // custum middleware to prevent an authentificated use to log in or to register 
app.use('/auth/register', keepUsersOutMiddleware);    
    // custum middleware to prevent visitors to connect, to publish and to log out 
app.use('/posts/new', keepVisitorsOutMiddleware);
app.use('/users/logout', keepVisitorsOutMiddleware);
app.use('/users/user:id', keepVisitorsOutMiddleware);
    // custom middleware allow the front-end to know whether the user has a session or not 
app.use(
    '*',
    (req, res, next) => {
        loggedIn = req.session.userId;
        next();
    }
) 
/*
    handle get request
*/ 
app.get('/', homeController);
app.get('/users/2md', contactezMoiController);
app.get('/auth/login', authLoginController);
app.get('/auth/register', newUserController);
app.get('/posts/new', newPostController);
app.get('/users/2md/courses', coursesController);
app.get('/users/user:id', userController);
app.get('/users/logout', logoutUserController);
/*
    handle post request
*/
app.post('/users/new', storeUserController); 
app.post('/users/login', userLoginController); 
app.post('/posts/store', storePostController);


