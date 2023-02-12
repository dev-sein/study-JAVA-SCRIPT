/* 
    day05/task02.html
*/

globalThis.temp;
const button = document.querySelector("button");
const input = document.querySelector("#numbertohangle");
const output = document.querySelector(".output");
let hangle = "공일이삼사오육칠팔구".split("");

button.addEventListener("click", function () {
    var arinput = input.value.split("");
    var result='';
    for (let i = 0; i < arinput.length; i++) {
        if(hangle[arinput[i]]){
            result += hangle[arinput[i]];
        }else if(arinput[i]=="."){
            result+="점";
        }
        else{
            result="숫자만 입력해주세요";
            break;
        }
    }
    output.innerHTML = result;
}
);


