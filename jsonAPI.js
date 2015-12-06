var http = require("http");
var url = require("url");

http.createServer(function(request, response){
    var rurl = url.parse(request.url, true);
    var path = rurl.pathname;
    var date = new Date(rurl.query.iso);
   
    if(request.method == 'GET'){
        response.writeHead(200, { 'Content-Type' : 'application/json' });
        
        if(path == '/api/parsetime'){
            response.end(
                JSON.stringify({
                    hour: date.getHours(),
                    minute: date.getMinutes(),
                    second: date.getSeconds()
                })
            );
        }else if (path == '/api/unixtime') {
             response.end(
                JSON.stringify({
                    unixtime: date.valueOf()
                })
            );
        }
    }
}).listen(process.argv[2]);

/*
     Here's the official solution in case you want to compare notes:  
 ─────────────────────────────────────────────────────────────────────────────  
   
     var http = require('http')  
     var url = require('url')  
     function parsetime (time) {  
       return {  
         hour: time.getHours(),  
         minute: time.getMinutes(),  
         second: time.getSeconds()  
       }  
     }  
     function unixtime (time) {  
       return { unixtime : time.getTime() }  
     }  
       
     var server = http.createServer(function (req, res) {  
       var parsedUrl = url.parse(req.url, true)  
       var time = new Date(parsedUrl.query.iso)  
       var result  
       
       if (/^\/api\/parsetime/.test(req.url))  
         result = parsetime(time)  
       else if (/^\/api\/unixtime/.test(req.url))  
         result = unixtime(time)  
       
       if (result) {  
         res.writeHead(200, { 'Content-Type': 'application/json' })  
         res.end(JSON.stringify(result))  
       } else {  
         res.writeHead(404)  
         res.end()  
       }  
     })  
     server.listen(Number(process.argv[2]))  
   
 ─────────────────────────────────────────────────────────────────────────────  
*/