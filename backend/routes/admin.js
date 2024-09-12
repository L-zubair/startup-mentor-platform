const express = require('express');
const Startup = require('../models/Startup');
const Mentor = require('../models/Mentor');
const router = express.Router();

// Get all Startups and Mentors (Admin only)
router.get('/all', async (req, res) => {
  try {
    const startups = await Startup.find();
    const mentors = await Mentor.find();
    res.json({ startups, mentors });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Admin can add new startup
router.post('/add-startup', async (req, res) => {
  const { name, description, founder, category } = req.body;
  const startup = new Startup({ name, description, founder, category });
  await startup.save();
  res.status(201).send('Startup added');
});

// Admin can add new mentor
router.post('/add-mentor', async (req, res) => {
  const { name, expertise, experience } = req.body;
  const mentor = new Mentor({ name, expertise, experience });
  await mentor.save();
  res.status(201).send('Mentor added');
});

module.exports = router;
