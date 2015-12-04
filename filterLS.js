var fs = require('fs');
var path = require("path");
var a = process.argv[2];
var b = '.' + process.argv[3];
fs.readdir(a, function(err, data){
    for(var i = 0; i <  data.length; i++){
        var file = data[i];
        var filter = path.extname(file);
        if(filter == b){
            console.log(file);
        }
    }
});

/*
 Here's the official solution in case you want to compare notes:  
 ─────────────────────────────────────────────────────────────────────────────  
   
     var fs = require('fs')  
     var path = require('path')  
     fs.readdir(process.argv[2], function (err, list) {  
       list.forEach(function (file) {  
         if (path.extname(file) === '.' + process.argv[3])  
           console.log(file)  
       })  
     })  
   
 ───────────────────────────────────────────────────────────────────────
*/