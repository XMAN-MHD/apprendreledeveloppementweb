/*
   module references 
*/
    // user model
    const PostModel = require('../models/Post');
    /*
        controller
    */ 
    const home = async (req, res) => {
        const posts = await PostModel.findById(req.params.id).populate('userId');
        res.render(
            'post', 
            {
                posts: posts
            }
        );
    }
    /*
        give access to getPost controller
    */ 
    module.exports = home;