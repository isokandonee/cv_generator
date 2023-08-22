const mongoose = require("mongoose");
const TemplateSchema = new mongoose.Schema({
  name: { type: String, unique: true },
});

module.exports = mongoose.model("Template", TemplateSchema);
