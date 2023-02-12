document.querySelector("#change").addEventListener("click", e => {getResult(changeToHangle)});
//e를 쓰지 않으면 window 객체로 인식함 그래서 안됨. number를 사용하려면 e로 받아야 함
//e를 써야지만 클릭 후 콜백함수 실행, e를 쓰지 않으면 함수 바로 실행됨 
function changeToHangle(number) {
    const numbering = document.querySelector("div#round");
    const resultTag = document.querySelector("#result");
    const hangle = "공일이삼사오육칠팔구";
    let result = "", temp = "", check = false;;

    if(isNaN(number) || number.charAt(0) == '.'){
        resultTag.innerHTML = "숫자만 입력해주세요.";
        numbering.innerHTML = "4";
        return;
    }

    if(number < 1) {
        result = "영";
    }

    for(let i in number) {
        temp = hangle[number.charAt(i)];

        if(i == 0 && result == "영"){
            continue;
        }

        if(!temp) {
            check = true;
            result += "점";
            continue;
        }

        result += temp;

        numbering.innerHTML = "3";
        
        if(check){
            numbering.innerHTML = "2";
        }
    }
    resultTag.innerHTML = result;
}

function getResult(callback){ //input 값 받아오는 함수
    const input = document.querySelector("input[name='input']").value; 
    if(callback){  
        callback(input);
    }
} 