var makeItModular = require("./makeItModular.js");

makeItModular(process.argv[2], process.argv[3], function (err, list){
    if(err){
        return console.error("There was an error!", err);
    }
    
    list.forEach(function (file){
        console.log(file);
    });
});

/*
 Here's the official solution in case you want to compare notes:  
 ─────────────────────────────────────────────────────────────────────────────  
 _/home/ubuntu/.nvm/versions/node/v4.1.1/lib/node_modules/learnyounode/exercises/make_it_modular/solution/solution.js_ :  
   
     var filterFn = require('./solution_filter.js')  
     var dir = process.argv[2]  
     var filterStr = process.argv[3]  
     filterFn(dir, filterStr, function (err, list) {  
       if (err)  
         return console.error('There was an error:', err)  
       list.forEach(function (file) {  
         console.log(file)  
       })  
     })  
   
 ─────────────────────────────────────────────────────────────────────────────

*/