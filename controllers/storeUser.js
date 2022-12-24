/*
   module references 
*/
    // package references
const path = require('path');
    // user model
const UserModel = require('../models/User');
/*
    controller
*/ 
const storeUser = (req, res) => {
    // image uploaded handler
    let imageHandler = req.files.image;
    // validation
    imageHandler.mv(
        path.resolve(__dirname, '../public/assets/img', imageHandler.name), 
        async (e) => {
            await UserModel.create(
                {...req.body, profileImage: '/assets/img' + imageHandler.name},
                (e, user) => {
                    if (e) {
                        console.error(e);
                    }else{
                        return res.redirect('/users/user:id')
                    } 
                } 
            )
        }
    );       
}
/*
    give access to index controller
*/ 
module.exports = storeUser;