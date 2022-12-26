/*
   module references 
*/
    // user model
const PostModel = require('../models/Post');
/*
    controller
*/ 
const home = async (req, res) => {
    const posts = await PostModel.find({},);
    res.render(
        'home', 
        {
            posts: posts
        }
    );
}
/*
    give access to index controller
*/ 
module.exports = home;