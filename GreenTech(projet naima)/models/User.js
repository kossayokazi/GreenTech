const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  adresse: String,
  email: { type: String, unique: true },
  telephone: String,
  password: String
});
module.exports = mongoose.model('User', userSchema);
