var http = require('http');
    var bl = require('bl');
    var results = [];
    var count = 0;

    for (var i = 0; i < 3; i++){
        httpGet(i);
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err){
            return console.error(err);
          }
          results[index] = data.toString();
          //AREA OF INTEREST START
          count++;

          if (count == 3){
            for(var j = 0; j < results.length; j++){
               console.log(results[j]);
            }
          }
            
          }));
      });
    }
    

/*
Here's the official solution in case you want to compare notes:  
 ─────────────────────────────────────────────────────────────────────────────  
   
     var http = require('http')  
     var bl = require('bl')  
     var results = []  
     var count = 0  
     function printResults () {  
       for (var i = 0; i < 3; i++)  
         console.log(results[i])  
     }  
     function httpGet (index) {  
       http.get(process.argv[2 + index], function (response) {  
         response.pipe(bl(function (err, data) {  
           if (err)  
             return console.error(err)  
       
           results[index] = data.toString()  
           count++  
       
           if (count == 3)  
             printResults()  
         }))  
       })  
     }  
       
     for (var i = 0; i < 3; i++)  
       httpGet(i)  
   
 ──────────────────────────────────────────────────────────────────────
*/