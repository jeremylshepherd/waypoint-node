var sum = 0;

for(var i = 2; i < process.argv.length; i++){
    var counter = process.argv[i];
    if(isNaN(+counter)){
        counter = 0;
    }else{
        counter = +counter;
    }
    sum += counter;
}

console.log(sum);