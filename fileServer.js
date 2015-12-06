var http = require("http");
var fs = require('fs');

http.createServer(function(request, response){
    var read = fs.createReadStream(process.argv[3]);
    read.pipe(response);
}).listen(process.argv[2]);

/*
Here's the official solution in case you want to compare notes:  
 ─────────────────────────────────────────────────────────────────────────────  
   
     var http = require('http')  
     var fs = require('fs')  
     var server = http.createServer(function (req, res) {  
       res.writeHead(200, { 'content-type': 'text/plain' })  
       fs.createReadStream(process.argv[3]).pipe(res)  
     })  
       
     server.listen(Number(process.argv[2]))  
   
 ───────────────────────────────────────────────────────────────────────
*/