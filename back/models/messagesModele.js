const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true, maxlength: 100 },
    email: { type: String, required: true },
    message: { type: String, required: true, maxlength: 1000 },
    status: { type: String, enum: ["new", "read"], default: "new" },
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model("Contact", contactSchema)
