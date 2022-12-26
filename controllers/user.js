/*
    module references
*/
    // user model
const userModel = require('../models/User');    
/*
    controller
*/ 
const user = async (req, res) => {
    const userDatas = await userModel.findById(req.session.userId);
    res.render(
        'account', 
        {user: userDatas}
    );
}
/*
    give access to index controller
*/ 
module.exports = user;