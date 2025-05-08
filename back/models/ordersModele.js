const mongoose = require('mongoose');

const ordersSchema = mongoose.Schema(
    {
        price: {
            type: Number,
        },
        articles: [
            { type: mongoose.Schema.Types.ObjectId, ref: "Articles" }
        ],
        user: {
            type: mongoose.Schema.Types.ObjectId, ref: "Users"
        },
        deliveryType: {
            type: Boolean,
            default: false,
            required: true
        },
        deliveryAddress: {
            type: String
        },
        payment: {
            type: String
        },
        isShipped: {
            type: Boolean,
            default: false
        }
        // , avis: {
        //     type: mongoose.Schema.Types.ObjectId, ref: "Avis"
        // }

    } , { timestamps: { createdAt: true} }
)

module.exports = mongoose.model("Commandes", ordersSchema);