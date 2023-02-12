
function market(name, price, quantity, callback) {
    if(callback){
        return callback(name, price * quantity);
    }
    return name, price, number;
}

function print(name, result){
    console.log(name + "의 총액은 " + result + "원 입니다.")
}


market("가지", 3000, 3, print);