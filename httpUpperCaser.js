var http = require("http");
var map = require('through2-map');



http.createServer(function(request, response){
    if(request.method == 'POST'){
    request.pipe(map(function (chunk) {  
       return chunk.toString().toUpperCase();  
     })).pipe(response);
    }else{
        return response.end('Error. POST only!');
    }
   
}).listen(process.argv[2]);

/*
Here's the official solution in case you want to compare notes:  
 ─────────────────────────────────────────────────────────────────────────────  
   
     var http = require('http')  
     var map = require('through2-map')  
     var server = http.createServer(function (req, res) {  
       if (req.method != 'POST')  
         return res.end('send me a POST\n')  
       req.pipe(map(function (chunk) {  
         return chunk.toString().toUpperCase()  
       })).pipe(res)  
     })  
       
     server.listen(Number(process.argv[2]))  
   
 ───────────────────────────────────────────────────────────────────────
*/