var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todoApp');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
var WordTranslation = require('../models/WordTranslation.js');


var addWord = function (wordOrigin, wordTranslation, callback){
        WordTranslation.create({wordOrigin:wordOrigin, wordTranslation:wordTranslation}, function (err, body) {
			if(err) console.log(err);
			callback(body);
        });
};

var getWord = function (wordOrigin, callback){
        WordTranslation.findOne({wordOrigin: wordOrigin}, 'wordOrigin wordTranslation',function (err, body) {
			if(err) console.log(err);
			callback(body);
        });
};

var getAllRecords = function (callback){
        WordTranslation.find({}, function (err, bodies) {
			if(err) console.log(err);
			callback(bodies);
        });
};

var getWordByIdAndUpdate = function(id, body, callback){
      WordTranslation.findByIdAndUpdate(id, body, function (err, post) {
        if (err) return next(err);
        callback(post);
      });
};

var getWordById = function(id, callback){
      WordTranslation.findById(id, function (err, post) {
        if (err) return next(err);
        callback(post);
      });
};
var getWordByIdAndRemove = function(id, body, callback){
    WordTranslation.findByIdAndRemove(id, body, function (err, post) {
        if (err) return next(err);
        callback(post);
    });
};
var getWordByOriginAndRemove = function(body, callback){
    WordTranslation.findOneAndRemove(body, function (err, post) {
        if (err) return next(err);
        callback(post);
    });
};
module.exports.addWord = addWord;
module.exports.getWord = getWord;
module.exports.getAllRecords = getAllRecords;
module.exports.getWordByIdAndUpdate = getWordByIdAndUpdate;
module.exports.getWordById = getWordById;
module.exports.getWordByIdAndRemove = getWordByIdAndRemove;
module.exports.getWordByOriginAndRemove = getWordByOriginAndRemove;