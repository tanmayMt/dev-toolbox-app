const mongoose = require("mongoose");

const jsonSchema = new mongoose.Schema({
    raw: { type: String, required: true },
    formatted: { type: String },
}, {
    timestamps: true
});

module.exports = mongoose.model("JsonEntry", jsonSchema);
