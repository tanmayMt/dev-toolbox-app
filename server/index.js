const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.REACT_APP_BACKEND_PORT || 8080;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/devtoolbox";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
})
.catch(err => {
    console.error("❌ MongoDB Error:", err.message);
});
