/*
    module references
*/
    // user model
const PostModel = require('../models/Post');    
/*
    controller
*/ 
const user = async (req, res) => {
    const posts = await PostModel.find({}).populate('userId');
    const user = posts[0].userId;
    console.log(user);
    res.render(
        'account', 
        {
            posts: posts, 
            user: user
        }
    );
}
/*
    give access to index controller
*/ 
module.exports = user;