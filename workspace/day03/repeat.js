/* JS에서는 오버로딩을 지원하지 않는다. */
/* 대신 함수 사용 시 매개변수의 개수를 맞출 필요 없다. */

/* 비밀번호 변경 */
/* 1. 로그인 후 비밀번호 변경 페이지 */
/* 2. 마이페이지에서 내 정보 수정 페이지 */
/* ※ ??는 DB라고 가정한다. */
function update(user,originalPassword){ //id, pw를 확인해야하므로, 새로운 비밀번호는 user에 있음, 
    if(?? == user.userId){ 
        if(originalPassword){
            if(?? == originalPassword){ //originalPassword가 not undefined 이고 같을 때 
                ??.password = user.password
        }
        return;
    }
    ??. password = user.password
}
}

//콜백함수
//하나의 함수에 여러 연산이 섞여 있다. (연산과 연산을 분리, 연산과 출력을 분리 등)


///* 객체 선언 방법 */
//1. {}
//2. new object() 어떤 프로퍼티 넣을지 모를 때
//3. prototype  많이 필요할 때 : 딱 한번만 선언하자.

let user1 = {name: "hds" age: 20}; //중괄호

function User(name, age){
    this.name = name; //선언
    this.age = age;
}

let user1 = new User("hds" 20);
let user2 = new User("hds" 20);
let user3 = new User("hds" 20);


User.prototype.number = 1;

console.log(User.prototype.number); //static 느낌 
console.log(user1.number);

/* Array */
/* 기억하자 . 중괄호 객체 대괄호 배열 */
let datas = new Array(3).fill(0); /* Array() 프로토타입, 타입을 모를 때 만들고 초기화 바로 하기 */
    for (let i = 0; i < datas.length; i++) {
        datas[i] = i+1;
    }

    console.log(datas);

    datas.length = data 

datas.length = datas.length - 1; // 변수임. length 자르기 가능.


console.log(datas);

datas.push(3);

console.log(datas);

console.log(datas.join(","));

console.log(datas.indexOf(3));

// datas.forEach(function(data, i, datas){});
datas.forEach(data => console.log(data));
console.log(datas.filter(data => data % 2 == 0).join(","));
console.log(datas.map(data => data * 2));