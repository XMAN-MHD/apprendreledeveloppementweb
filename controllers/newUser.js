/*
    controller
*/ 
const newUser = (req, res) => {
    res.render(
        'inscrire', 
        {editor: true}
    );
}
/*
    give access to index controller
*/ 
module.exports = newUser;