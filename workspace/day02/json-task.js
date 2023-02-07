//상품명과 가격을 json으로 만든다.
//위 json을 js object 객체로 변환한다.
//각 프로퍼티를 출력한 뒤 다시 json으로 변환한다.

let goods = `{"name": "컴퓨터", "price" : 1000}`;
let goodsJASON = JSON.stringify(goods);
godds = JSON.parse(goodsJASON);

console.log(goodsJASON);
console.log(goods.name);






/* teacher  */

let productJSON = `{"name": "마우스", "price": 25000}`;
let product = JSON.parse(productJSON);

with(console){
    log(product.name);
    log(product.price);
}
productJSON = JSON.stringify(product);

console.log(productJSON);