console.log(average(2,3));

function add(number1,number2, callback){
    if(callback){
        callback(number1 + number2);
        return;
    }
    return number1 + number2;

}

function average(number1, number2){
    return add(number1+number2) / 2;
}

//JS에서는 매개변수의 개수에 맞추어 값을 전달할 필요가 없다.
//(값 부족해서 UNDEFINED -> IF문으로 처리하면 됨)
//만약 매개변수 개수보다 부족하게 값을 전달하면 값을 못받은 매개변수에는 undefined가 들어간다.
//만약 매개변수 개수보다 넘치게 값을 전달하면 잘린다.

//JS에서는 함수를 값으로 취급하기 때문에 매개변수로 전달이 가능하다.
//현재 함수에서 나온 결과 값을 다른 함수로 전달할 때에는 callback 이라는 식별자로 결과 값을 전달받아 온다.

/*  console.log(
    add(1, 3, function(result){
        return result / 2;
    })
);

function add(number1, number2, callback) {
    if(callback){
        return callback(number1 + number2);
    }
    return number1 + number2;
} 
 */
 
// 상품명, 가격, 개수를 전달받은 뒤 전체 금액을 출력한다.
// 1. 상품명과 가격, 개수는 A함수에서 전달받는다. -> add 
// 2. B함수에서는 상품명과 전체 금액을 전달받아서 출력한다. average 
// 3. A함수는 B함수를 callback함수로 전달받는다. average(name, )

//// 1. 상품명과 가격, 개수는 A함수에서 전달받는다.


function totalpricea(name, price, count, callback){
    if(callback){
        return name, totalpriceb(totalprice);
    }    
    return name, price, count;
};

// 2. B함수에서는 상품명과 전체 금액을 전달받아서 출력한다.
function totalpriceb(name, totalprice){
    return name, totalprice;
};

console.log(
    totalpriceb("상품명", 3000)
); 

//b함수 출력

console.log(
    totalpricea("이름", 1000, 3)
);
// 3. A함수는 B함수를 callback함수로 전달받는다.




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


