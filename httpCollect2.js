var httpCollect = require('./httpCollect1.js');

httpCollect(process.argv[2]);


/*
 Here's the official solution in case you want to compare notes:  
 ─────────────────────────────────────────────────────────────────────────────  
   
     var http = require('http')  
     var bl = require('bl')  
     http.get(process.argv[2], function (response) {  
       response.pipe(bl(function (err, data) {  
         if (err)  
           return console.error(err)  
         data = data.toString()  
         console.log(data.length)  
         console.log(data)  
       }))    
     })  
   
 ─────────────────────────────────────────────────────────────────────────────  
*/