const mongoose = require('mongoose');

const articleSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        brand: {
            type: String,
            default: 'vintage'
        },
        material: {
            type: String,
        },
        color: {
            type: String,
        },
        period: {
            type: String,
        },
        availability: {
            type: Boolean,
            required: true,
            default: true
        },
        picture : {
            img: {
                type: String,
                required: true
            },
            img1: {
                type: String
            },
            img2: {
                type: String
            },
            img3: {
                type: String
            },
            img4: {
                type: String
            },
            video: {
                type: String
            }
        },
        description: {
            type: String
        },
        category: {
            type: mongoose.Schema.Types.ObjectId, ref: "Category",
        },
    } , { timestamps: { createdAt: true} }
)

module.exports = mongoose.model("Articles", articleSchema);