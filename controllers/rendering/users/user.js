/*
    module references
*/
    // user model
const PostModel = require('../../../models/blog/BlogPost');    
/*
    controller
*/ 
const user = async (req, res) => {
    const posts = await PostModel.find({}).populate('userId');
    const user = posts[0].userId;
    res.render(
        'users/account', 
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