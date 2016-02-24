var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var WordTranslation = require('../models/WordTranslation.js');

/* GET /WordTranslations listing. */
router.get('/', function(req, res, next) {
    WordTranslation.find(function (err, WordTranslations) {
      if (err) return next(err);
      res.json(WordTranslations);
    });
});

/* POST /WordTranslations */
router.post('/', function(req, res, next) {
    WordTranslation.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});

/* GET /WordTranslations/id */
router.get('/:id', function(req, res, next) {
  WordTranslation.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /WordTranslations/:id */
router.put('/:id', function(req, res, next) {
  WordTranslation.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /WordTranslations/:id */
router.delete('/:id', function(req, res, next) {
  WordTranslation.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
