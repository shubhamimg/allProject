const mongoose = require("mongoose");
const bcrypt = require('bcrypt');


const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Hash password before saving user
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

// Method to compare entered password with stored hash
// userSchema.methods.comparePassword = function (userPassword) {
//     return bcrypt.compare(userPassword, this.password);
// };



const User = mongoose.model("User", userSchema);

module.exports = User;