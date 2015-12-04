var http = require('http');

module.exports = function (url) {
   var complete = "";
   http.get(url, function (response){
      response.on('error', console.error);
      response.on('data', function(data){complete += data;;});
      response.on('end', function(){console.log(complete.length + '\n' + complete)});
   });
};

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