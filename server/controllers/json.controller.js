const JsonModel = require("../models/json.model");

exports.formatJson = async (req, res) => {
    const { jsonText } = req.body;

    try {
        const parsed = JSON.parse(jsonText);
        const formatted = JSON.stringify(parsed, null, 4);

        // Optional: Save to DB
        await JsonModel.create({ raw: jsonText, formatted });

        res.json({ success: true, formatted });
    } catch (err) {
        res.status(400).json({ success: false, message: "Invalid JSON", error: err.message });
    }
};

exports.getHistory = async (req, res) => {
    try {
        const records = await JsonModel.find().sort({ createdAt: -1 });
        res.json({ success: true, data: records });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to fetch history" });
    }
};
