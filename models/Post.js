/*
    references to the modules
*/
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
/*
    schema of user model
*/
const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    message: { type: String, required: true },
    postImage: { type: String, required: true }
})
/*
    user model
*/ 
const User = mongoose.model('posts', PostSchema);
/*
    give access to the user model
*/
module.exports = User;   


