var express = require('express');
var router = express.Router();

var db = require('../lib/DBVocab');

//it's needed, i can describe later why i made that
var runJsonLikeAMemberFunctionOfObjectRes = function(res)
{
    return function(response){ res.json(response);};
};

/* GET /WordTranslations listing. */
router.get('/', function(req, res, next) {
    db.getAllRecords(runJsonLikeAMemberFunctionOfObjectRes(res));
});

/* POST /WordTranslations */
router.post('/', function(req, res, next) {
    db.addWord(req.body.wordOrigin, req.body.wordTranslation, runJsonLikeAMemberFunctionOfObjectRes(res));
});

/* GET /WordTranslations/id */
router.get('/:id', function(req, res, next) {
  	db.getWordById(req.params.id, cbFunc);
});

/* PUT /WordTranslations/:id */
router.put('/:id', function(req, res, next) {
  	db.getWordByIdAndUpdate(req.params.id, req.body, runJsonLikeAMemberFunctionOfObjectRes(res));
});

/* DELETE /WordTranslations/:id */
router.delete('/:id', function(req, res, next) {
  	db.getWordByIdAndRemove(req.params.id, req.body, runJsonLikeAMemberFunctionOfObjectRes(res));
});

module.exports = router;
