const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    nick: {
        type: String,
        trim: true,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unigue: 1
    },
    password: {
        type: String,
        maxlength: 100
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema);

module.exports = { User };