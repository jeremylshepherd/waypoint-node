var fs = require("fs");
var path = require("path");

module.exports = function (dir, filter, fn){
    fs.readdir(dir, function (err, list) {
        if(err){
            return fn(err);
        }
       list = list.filter(function (file) {
           return path.extname(file) === '.' + filter;
         });
         fn(null, list);
       });
};

/*
     Here's the official solution in case you want to compare notes:  
 ─────────────────────────────────────────────────────────────────────────────  
 _/home/ubuntu/.nvm/versions/node/v4.1.1/lib/node_modules/learnyounode/exercises/make_it_modular/solution/solution_filter.js_ :  
   
     var fs = require('fs')  
     var path = require('path')  
     module.exports = function (dir, filterStr, callback) {  
       fs.readdir(dir, function (err, list) {  
         if (err)  
           return callback(err)  
       
         list = list.filter(function (file) {  
           return path.extname(file) === '.' + filterStr  
         })  
       
         callback(null, list)  
       })  
     }  
   
 ───────────────────────────────────────────────────────────────────────

*/