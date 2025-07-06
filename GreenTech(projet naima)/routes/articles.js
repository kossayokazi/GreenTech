const express = require('express');
const router = express.Router();
const Article = require('../models/Article');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, async (req, res) => {
  const article = new Article(req.body);
  await article.save();
  res.status(201).json(article);
});

router.get('/', async (req, res) => {
  const articles = await Article.find().populate('categorie');
  res.json(articles);
});

router.put('/:id', auth, async (req, res) => {
  const updated = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', auth, async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.json({ message: 'Article supprimé' });
});

module.exports = router;
