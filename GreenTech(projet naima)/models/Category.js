const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
  nom: String,
  description: String
});
module.exports = mongoose.model('Category', categorySchema);
