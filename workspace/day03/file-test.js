let file = require('fs');

let totalA = 3;
let totalB = 6;


// file.writeFile('경로', '내용', '인코딩', '콜백함수');
// file.readFile('경로', '인코딩', '콜백함수')

 file.writeFile('lovseddlyday.txt', `${totalA}+${totalB}`, 'utf-8', function(error){
    if(error){
        console.log(error)
    }else{
         console.log("성공!")
     }
 });

// file.readFile('love.txt', 'utf-8', function(error, content) {
//     if(error){
//         console.log(error);
//     }else{
//         console.log(content);
//     }
// });