/*
   module references 
*/
    // package references
    const path = require('path');
    // course's post model
const CoursesPostModel = require('../../../models/courses/CoursesPost');
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
                console.error(e);
                return res.redirect('/courses/new')
             }
             await CoursesPostModel.create(
                 {...req.body, postImage: '/assets/img/' + imageHandler.name, userId: req.session.userId},
                 (e, user) => {
                     if(e) 
                     {
                        console.error(e);
                        return res.redirect('/courses/new')
                     }
                     else
                     {
                        console.error(e);
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