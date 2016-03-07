var express = require('express');
var router = express.Router();

var db = require('../lib/DBVocab');



/* GET /WordTranslations listing. */
router.get('/', function(req, res, next) {
    var cbFunc = function(responce)
    {
        res.json(responce);
    };
    db.getAllRecords(cbFunc);
});

/* POST /WordTranslations */
router.post('/', function(req, res, next) {
    var cbFunc = function(responce)
    {
        res.json(responce);
    };
    db.addWord(req.body.wordOrigin, req.body.wordTranslation, cbFunc);
});

/* GET /WordTranslations/id */
router.get('/:id', function(req, res, next) {
  	var cbFunc = function(responce)
    {
        res.json(responce);
    };
  	db.getWordById(req.params.id, cbFunc);
});

/* PUT /WordTranslations/:id */
router.put('/:id', function(req, res, next) {
  	var cbFunc = function(responce)
    {
        res.json(responce);
    };
  	db.getWordByIdAndUpdate(req.params.id, req.body, cbFunc);
});

/* DELETE /WordTranslations/:id */
router.delete('/:id', function(req, res, next) {
  	var cbFunc = function(responce)
    {
        res.json(responce);
    };
  	db.getWordByIdAndRemove(req.params.id, req.body, cbFunc);
});

module.exports = router;
