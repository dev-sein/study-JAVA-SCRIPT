function Passenger(name, age, level){ //선언할 때 프로토타입이므로 승객이 여러명이라는 것을 알 수 있음 
    this.name = name;
    this.age = naageme;
    this.level = level;

}

let han = new Passenger('한동석', 20, 1);
let hong = new Passenger('홍길동', 40, 2);
let lee = new Passenger('이순신', 39, 3);

let train = new Array(han, hong, lee);
let trainJSON = JSON.stringify(train);
console.log(train);
console.log(trainJSON);