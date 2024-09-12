const mongoose = require('mongoose');
const StartupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  founder: String,
  category: String
});

module.exports = mongoose.model('Startup', StartupSchema);
