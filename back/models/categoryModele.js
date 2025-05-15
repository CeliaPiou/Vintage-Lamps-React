const mongoose = require('mongoose');

const categorySchema = mongoose.Schema(
    {
        name : {
            type: String,
            required: true
        },
        image: {
            type: String
        },
        articles : [{
            type: mongoose.Schema.Types.ObjectId, ref: "Articles",
        }]
    } , { timestamps: { createdAt: true} }
)

module.exports = mongoose.model("Category", categorySchema);