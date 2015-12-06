var net = require("net");
var arg = process.argv[2];
var n = function(num){return num < 10 ? '0' + num : num;};

var server = net.createServer(function callback(socket){
    var date = new Date();
    var parDate = date.getFullYear() + '-' + n(date.getMonth() + 1) + '-' + n(date.getDate()) + ' ' + n(date.getHours()) + ':' + n(date.getMinutes()) + '\n';
    socket.end(parDate);
}).listen(arg);

/*
Here's the official solution in case you want to compare notes:  
 ─────────────────────────────────────────────────────────────────────────────  
   
     var net = require('net')  
     function zeroFill(i) {  
       return (i < 10 ? '0' : '') + i  
     }  
     function now () {  
       var d = new Date()  
       return d.getFullYear() + '-'  
         + zeroFill(d.getMonth() + 1) + '-'  
         + zeroFill(d.getDate()) + ' '  
         + zeroFill(d.getHours()) + ':'  
         + zeroFill(d.getMinutes())  
     }  
       
     var server = net.createServer(function (socket) {  
       socket.end(now() + '\n')  
     })  
       
     server.listen(Number(process.argv[2]))  
   
 ──────────────────────────────────────────────────────────────────────
*/