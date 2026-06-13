const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    emailid: { type: String },
    password: { type: String },
    age: { type: Number },
    gender: { type: String }
});

 const UserModel = mongoose.model('User', userSchema);

 module.exports = UserModel;
 /*  here user is the model name , modal is the instance of the model */