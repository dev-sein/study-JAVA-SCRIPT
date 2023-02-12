const id = document.querySelector("#id");
const idWarning = document.querySelector("#id-warning");
const email = document.querySelector("#email-input");

// 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4 ~10자리인지 검사
// {4,10}: 4 ~ 10자리

function checkId() {
    var idPattern = /[a-zA-Z0-9_-]{5,20}/;
    idWarning.style.color = "red";

    if(id.value.length < 1) {
        idWarning.innerHTML = "필수 정보입니다.";
        idWarning.style.display = "block";
    } else if(idPattern.test(id.value)) {
        idWarning.innerHTML = "멋진 아이디네요!";
        idWarning.style.color = "#08A600";
        idWarning.style.display = "block";
    } else {
        idWarning.innerHTML = "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";
        idWarning.style.display = "block";
    }

    console.log(document.querySelector("#email").value());
}

id.addEventListener("blur", checkId);

/* focus 이벤트는 요소가 포커스를 받을 때, blur 이벤트는 포커스를 잃을 때 발생합니다. */


function checkEmail() {
    const emailWarning = document.querySelector("#email-warning");
    const emailValue = email.value;
    var emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    console.log(emailValue);
    if(emailValue.length < 1){ 
        emailWarning.style.display = "none"; 
    } 
    if(emailPattern.test(emailValue.value)) {
        emailWarning.style.display = "none"; 
    } else {
        emailWarning.innerHTML = "이메일 주소를 다시 확인해주세요.";
        emailWarning.style.color = "red";
        emailWarning.style.display = "block";

    }

}

// email.addEventListener("keyup", e => );