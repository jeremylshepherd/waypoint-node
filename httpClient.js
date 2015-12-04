var http = require("http");

http.get(process.argv[2], function callback (response){
   response.setEncoding('utf-8');
   response.on('err', console.error);
   response.on('data', console.log);
});

/*
Here's the official solution in case you want to compare notes:  
 ─────────────────────────────────────────────────────────────────────────────  
   
     var http = require('http')  
     http.get(process.argv[2], function (response) {  
       response.setEncoding('utf8')  
       response.on('data', console.log)  
       response.on('error', console.error)  
     })  
   
 ───────────────────────────────────────────────────────────────────────
*/