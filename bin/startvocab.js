#!/usr/bin/env node
var mongoose = require('mongoose');
var Todo = require('../models/Todo.sjs');
mongoose.connect('mongodb://localhost/Vocab');
var db = mongoose.connection;

//vocab --add wordOrigin wordTranslation
if(process.argv.length == 2)
{
    console.log("Use '--add word translation', if you want to add new entry.\n" + 
                "write simply word after this command for translation.");
}
else if(process.argv[2] == '--add')
{
    db.once('open', function () {
        console.log("Creating");
        Todo.create({wordOrigin:process.argv[3], wordTranslation:process.argv[4]}, function (e, body) {
            console.log(body);
            console.log("Created");
        });
    });
}
else{
    db.once('open', function () {
        Todo.findOne({wordOrigin: process.argv[2]}, 'wordOrigin wordTranslation',function (e, body) {
            if(body == null)
            {
                console.log('Word not found.');
            }
            else
            {
                console.log(body.wordOrigin + ' - ' + body.wordTranslation);
            }
        });
    });
}