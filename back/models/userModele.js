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

        ///// Vérification e-mail
        isVerified: {
            type: Boolean, default: false
        },
        verificationTokenHash: {
            type: String
        },
        verificationTokenExpires: {
            type: Date
        },
        /////

        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        },
        orders: [{
            type: mongoose.Schema.Types.ObjectId, ref: "Commandes"
        }],
        avis: [{
            type: mongoose.Schema.Types.ObjectId, ref: "Avis"
        }],
    } , { timestamps: { createdAt: true} }
)

module.exports = mongoose.model("Users", userSchema);