exports.encodeText = (req, res) => {
    const { text } = req.body;

    try {
        const encoded = Buffer.from(text, "utf-8").toString("base64");
        res.json({ success: true, encoded });
    } catch (err) {
        res.status(400).json({ success: false, message: "Encoding failed", error: err.message });
    }
};

exports.decodeText = (req, res) => {
    const { text } = req.body;

    try {
        const decoded = Buffer.from(text, "base64").toString("utf-8");
        res.json({ success: true, decoded });
    } catch (err) {
        res.status(400).json({ success: false, message: "Decoding failed", error: err.message });
    }
};
