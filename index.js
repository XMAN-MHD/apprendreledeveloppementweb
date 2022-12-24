/*
    references to modules
*/ 
    // packages
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressFileUpload = require('express-fileupload');
    //controllers 
const homeController = require('./controllers/home');
const contactezMoiController = require('./controllers/contactezMoi');
const userLoginController = require('./controllers/userLogin');
const newUserController = require('./controllers/newUser');
const newPostController = require('./controllers/newPost');
const mesCoursController = require('./controllers/mesCours');
const userController = require('./controllers/user');
const storeUserController = require('./controllers/storeUser');
    //middlewares 
const checkEmptyField = require('./middlewares/checkEmptyField'); 
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
    // parse the req.body (form datas) 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
    // upload the files and enable the req.file
app.use(expressFileUpload());
    // custom middleware checkEmptyField
app.use("/users/new", checkEmptyField); 
app.use("/users/login", checkEmptyField); 
/*
    handle get request
*/ 
app.get('/', homeController);
app.get('/users/2md', contactezMoiController);
app.get('/auth/login', userLoginController);
app.get('/auth/register', newUserController);
app.get('/posts/new', newPostController);
app.get('/users/2md/courses', mesCoursController);
app.get('/users/user:id', userController);
/*
    handle post request
*/
app.post('/users/new', storeUserController); 
/*
    catch 404 and forward to error handler
*/

