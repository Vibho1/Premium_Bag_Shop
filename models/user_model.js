const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/BagShop");

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true
    },
    email: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    isAdmin: Boolean,
    orders: Array,
    contact: Number,
    picture: String
})

module.exports = mongoose.model("user", userSchema);