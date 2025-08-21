const mongoose = require('mongoose');

const avisSchema = mongoose.Schema(
    {
        user : {
            type: mongoose.Schema.Types.ObjectId, ref: "Users",
            required: true
        },
        order: {
            type: mongoose.Schema.Types.ObjectId, ref: "Orders",
            required: true
        },
        rating: {
            type: Number,
            min: 1,
            max: 5,
            required: true
        },
        content: {
            type: String,
        },
        img: {
            data: Buffer,
            contentType: String
        }
    } , { timestamps: { createdAt: true} }
)

module.exports = mongoose.model("Avis", avisSchema);