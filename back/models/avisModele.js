const mongoose = require('mongoose');

const avisSchema = mongoose.Schema(
    {
        username : {
            type: mongoose.Schema.Types.ObjectId, ref: "Users",
            required: true
        },
        order: {
            type: mongoose.Schema.Types.ObjectId, ref: "Orders",
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        content: {
            type: String,
        }
    } , { timestamps: { createdAt: true} }
)

module.exports = mongoose.model("Avis", avisSchema);