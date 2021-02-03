const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
name: {
    type: String,
    require: true
},

email: {
    type: String,
    require: true
},

password: {
    type: String,
    require: true
},

{timestamps: true}

});

const User =  mongoose.model('User', usersSchema)

module.exports = {
    User
}