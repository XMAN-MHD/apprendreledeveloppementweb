/*
    controller
*/ 
const newPost = (req, res) => {
    res.render(
        'publication', 
        {editor: true}
    );
}
/*
    give access to index controller
*/ 
module.exports = newPost;