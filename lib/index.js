/**
* Says hello to a person.
*
* @param name Name of the person to greet.
*/
var mongoose = require('mongoose');
var Todo = require('../models/Todo.js');

var getWordTranslation = function(word) {
  var retWord = "";
  var query = Todo.findOne({ 'wordOrigin': word });
  query.select('wordOrigin');

  // execute the query at a later time
  query.exec(function (err, wortTranslation) {
    if (err) return "";
    retWord = wortTranslation;
    retWord = "ddd";
  });
  return retWord;
};

var sayHello = function(name) {
 return 'Hello, ' + name;
};
 
// Allows us to call this function from outside of the library file.
// Without this, the function would be private to this file.
exports.sayHello = sayHello;
exports.getWordTranslation = getWordTranslation;