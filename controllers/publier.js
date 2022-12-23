/*
    controller
*/ 
const publier = (req, res) => {
    res.render(
        'publier', 
        {editor: true}
    );
}
/*
    give access to index controller
*/ 
module.exports = publier;