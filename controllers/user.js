/*
    controller
*/ 
const user = (req, res) => {
    res.render(
        'monCompte', 
    );
}
/*
    give access to index controller
*/ 
module.exports = user;