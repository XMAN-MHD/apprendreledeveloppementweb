/*
    controller
*/ 
const authLogin = (req, res) => {
    res.render('connexion');
}
/*
    give access to authentification login controller
*/ 
module.exports = authLogin;