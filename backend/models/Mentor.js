const mongoose = require('mongoose');
const MentorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  expertise: String,
  experience: Number
});

module.exports = mongoose.model('Mentor', MentorSchema);
