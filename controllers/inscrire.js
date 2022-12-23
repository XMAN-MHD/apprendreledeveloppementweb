/*
    controller
*/ 
const inscrire = (req, res) => {
    res.render(
        'inscrire', 
        {editor: true}
    );
}
/*
    give access to index controller
*/ 
module.exports = inscrire;