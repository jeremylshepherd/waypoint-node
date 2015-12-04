var fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', function(err, data){
    var lines = data.toString().split('\n').length - 1;
    console.log(lines);
});

/*
---------------OFFICIAL SOLUTION-----------------
    var fs = require('fs')  
    var file = process.argv[2]  
    fs.readFile(file, function (err, contents) {  
       // fs.readFile(file, 'utf8', callback) can also be used  
       var lines = contents.toString().split('\n').length - 1  
       console.log(lines)  
     })  
*/