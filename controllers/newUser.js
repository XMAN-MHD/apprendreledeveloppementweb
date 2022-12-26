/*
    controller
*/ 
const newUser = (req, res) => {
    res.render(
        'inscription', 
        {editor: true}
    );
}
/*
    give access to index controller
*/ 
module.exports = newUser;