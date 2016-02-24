var mongoose = require('mongoose');

var WordTranslationSchema = new mongoose.Schema({
  wordOrigin: String,
  wordTranslation: String
});

module.exports = mongoose.model('WordTranslation', WordTranslationSchema);

