//프로퍼티 중 KEY에 ""가 있으면 JSON이고,
//프로퍼티 중 KEY에 어떠한 따옴표도 없으면 JS Object이다.
// JSON.stringify(객체): 객체를 JSON으로
// JSON.parse(JSON 문자열): JSON을 객체로


let user = {name: "한동석", age: 20};
let userJASON = JSON.stringify(user); //JSON 변환
user = JASON.parse(userJASON); //JSON -> js 변환

console.log(user);
console.log(userJASON);
console.log(user.name);