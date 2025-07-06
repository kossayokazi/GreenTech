const mongoose = require('mongoose');
const articleSchema = new mongoose.Schema({
  nom: String,
  description: String,
  categorie: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  prix: Number,
  images: [String]
});
module.exports = mongoose.model('Article', articleSchema);
