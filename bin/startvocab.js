#!/usr/bin/env node
var db = require('../lib/DBVocab');

var outputFunc = function(data)
{
	console.log(data);
	process.exit();
}

//vocab --add wordOrigin wordTranslation
if(process.argv.length == 2)
{
    console.log("Use --add word translation, if you want add new entry.\n" + 
                "Write simply word after this command for translation.\n" +
			   "Use --all to show all words.");
}
else if(process.argv[2] == '--add')
{
    db.addWord(process.argv[3], process.argv[4], outputFunc);
}
else if(process.argv[2] == '--all')
{
    db.getAllRecords(outputFunc);
}
else{
    db.getWord(process.argv[2], outputFunc);
}
