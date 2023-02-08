//1. 제어문 2. callback 함수 3. arrow expression

//1~10까지 Array 객체에 담은 후 짝수만 출력

let datas = new Array(10).fill(0); /* Array() 프로토타입, 타입을 모를 때 만들고 초기화 바로 하기 */
    for (let i = 0; i < datas.length; i++) {
        datas[i] = i+1;
    }

 const evenNumber = datas.filter(number => number % 2 === 0);
 console.log(evenNumber); */

 da

 //콜백함수로 짝수만 출력할 경우 이거 구성을 어떻게 해야함?? 
/*     let datas = new Array(10).fill(0);
    function printEvenNumber(datas, callback){
      if(callback){
        for (let i = 0; i < datas.length; i++) {
          array[i]= i+1;
          return callback(datas);
        }
      }  

      console.log(datas)

 }

 printEvenNumber(function(){}); */


 //changeColor(function(color){console.log(color);})

//한글을 정수로 변경

/*  function hanToNum(str){
    var numKor = new Array {'영','일','이','삼','사','오','육','칠','팔','구'};
    var result = "";
        for(i=0; i<str.length; i++) { 
            han = numKor.indexOf(numKor.charAt(i)); 
            result += han;
        }
    }
    console.log("일공이사");  */

//정수를 한글로 변경




//1~100까지 합 출력
    let sum=0;
    for (let i = 0; i < 100; i++) {
       sum+=i;
    }
    console.log(sum);

    