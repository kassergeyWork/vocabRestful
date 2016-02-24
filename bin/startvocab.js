#!/usr/bin/env node
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Vocab');
var db = mongoose.connection;
var WordTranslation = require('../models/WordTranslation.js');

//vocab --add wordOrigin wordTranslation
if(process.argv.length == 2)
{
    console.log("Use --add word translation, if you want add new entry.\n" + 
                "write simply word after this command for translation.");
}
else if(process.argv[2] == '--add')
{
    db.once('open', function () {
        console.log("Creating");
        WordTranslation.create({wordOrigin:process.argv[3], wordTranslation:process.argv[4]}, function (e, body) {
			if(e) console.log(e);
            console.log(body);
            console.log("Created");
			db.close();
        });
    });
}
else{
    db.once('open', function () {
        WordTranslation.findOne({wordOrigin: process.argv[2]}, 'wordOrigin wordTranslation',function (e, body) {
			if(e) console.log(e);
            if(body == null)
            {
                console.log('Word not found.');
            }
            else
            {
                console.log(body.wordOrigin + ' - ' + body.wordTranslation);
            }
			db.close();
        });
    });
}