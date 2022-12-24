/*
    controller
*/ 
const home = (req, res) => {
    res.render('home');
}
/*
    give access to index controller
*/ 
module.exports = home;