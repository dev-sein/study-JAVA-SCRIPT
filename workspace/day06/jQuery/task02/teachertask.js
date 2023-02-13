/* 
day06/jQuery/task02.js
 */

const $change = $("#change");

$change.on("click", function(){getResult(changeToHangle)});
function changeToHangle(number) {
    const $numbering = $("div#round");
    const $resultTag = $("#result");
    const hangle = "공일이삼사오육칠팔구";
    let result = "", temp = "", check = false;

    
    if(isNaN(number) || number.charAt(0) == '.'){
        $resultTag.text("숫자만 입력해주세요.");
        $numbering.text("4");
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

        $numbering.text("3");
        
        if(check){
            $numbering.text("2");
        }
    }
    $resultTag.text(result);
}



function getResult(callback){ //input 값 받아오는 함수
    const $input = $("input[name='input']").val(); 
    if(callback){  
        callback($input);
    }
} 




// document.querySelector("#change").addEventListener("click", e => {getResult(changeToHangle)});
// //e를 쓰지 않으면 window 객체로 인식함 그래서 안됨. number를 사용하려면 e로 받아야 함
// function changeToHangle(number) {
//     const numbering = document.querySelector("div#round");
//     const resultTag = document.querySelector("#result");
//     const hangle = "공일이삼사오육칠팔구";
//     let result = "", temp = "", check = false;;

//     if(isNaN(number) || number.charAt(0) == '.'){
//         resultTag.innerHTML = "숫자만 입력해주세요.";
//         numbering.innerHTML = "4";
//         return;
//     }

//     if(number < 1) {
//         result = "영";
//     }

//     for(let i in number) {
//         temp = hangle[number.charAt(i)];

//         if(i == 0 && result == "영"){
//             continue;
//         }

//         if(!temp) {
//             check = true;
//             result += "점";
//             continue;
//         }

//         result += temp;

//         numbering.innerHTML = "3";
        
//         if(check){
//             numbering.innerHTML = "2";
//         }
//     }
//     resultTag.innerHTML = result;
// }

// function getResult(callback){ //input 값 받아오는 함수
//     const input = document.querySelector("input[name='input']").value; 
//     if(callback){  
//         callback(input);
//     }
// } 