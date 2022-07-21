const fs = require('fs');
const buf = fs.readFile(process.argv[2] , 'utf8' ,callback );


function callback (err, buf) { 
if(err){
console.log(err);
} else {
const str = buf.toString();
const NewLinesCounter = str.split('\n').length -1 ;
console.log(NewLinesCounter)
}
}  
