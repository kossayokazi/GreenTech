const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/signup', async (req, res) => {
  const { nom, prenom, adresse, email, telephone, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ nom, prenom, adresse, email, telephone, password: hashed });
  await user.save();
  res.status(201).json({ message: 'Utilisateur inscrit' });
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ message: 'Identifiants invalides' });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ token });
});

module.exports = router;
