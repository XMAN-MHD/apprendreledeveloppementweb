/*
   module references 
*/
    // package references
    const path = require('path');
    // user model
const PostModel = require('../models/Post');
/*
    controller
*/ 
const storePost = (req, res) => {
     // image uploaded handler
     let imageHandler = req.files.image;
     // validation
     imageHandler.mv(
         path.resolve(__dirname, '../public/assets/img/', imageHandler.name), 
         async (e) => {
             if (e) {
                 return res.redirect('/posts/new')
             }
             await PostModel.create(
                 {...req.body, postImage: '/assets/img/' + imageHandler.name},
                 (e, user) => {
                     if(e) 
                     {
                         return res.redirect('/posts/new')
                     }
                     else
                     {
                         return res.redirect('/')
                     } 
                 } 
             )
         }
     );     
}
/*
    give access to authentification login controller
*/ 
module.exports = storePost;