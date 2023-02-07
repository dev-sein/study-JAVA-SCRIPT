

/* <!-- 
    pr("%", 5);
    결과 : %%%%%

    위의 결과가 나오는 함수를 선언하여 사용한다.
    출력은 콜백함수를 사용한다.
 --> */


 function pr(input, count, callback){
    if(callback){
        var result="";
        for (let i = 0; i < count; i++) {
            result += input;
        }
        return callback(result);
    }
    return result;
 } 

 function output(result){
    console.log("결과 : " + result);
 }
 pr("%", 5, output)
 /* 사용: printinput("문자열", 개수) */
 
function A(goodsName, price, amount, callback){
    if(callback){
        return callback(goodsName, price * amount);
    }
    return goodsName, price * amount;
}


function B(goodsName, result){
    console.log(goodsName + "의 값은" + result + "입니다.");
}

A("과자", 1000, 3, B)
