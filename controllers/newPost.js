/*
    controller
*/ 
const newPost = (req, res) => {
    res.render(
        'publier', 
        {editor: true}
    );
}
/*
    give access to index controller
*/ 
module.exports = newPost;