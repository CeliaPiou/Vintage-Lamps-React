const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        username: {
            type: String
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        }
    } , { timestamps: { createdAt: true} }
)

module.exports = mongoose.model("Users", userSchema);