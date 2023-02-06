//script-file.html

function changeImage(e, object){
    let status = object.classlist()[0];
    if(status == "on"){
    object.classList.replace("on","off ");
    object.src="image/icon3.png"

    return;
}
object.classList.replace("on","off ");
object.src="image/icon4.png"
}