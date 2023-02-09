/* banner.html */
HTMLCollection.prototype.forEach = Array.prototype.forEach;
const banner = document.querySelector("div.banner");
const imageDiv = document.querySelectorAll("div.banner div");
const lastImageDiv = document.createElement("div");
let count = 0;

imageDiv.forEach((div, i) => div.style.backgroundImage = `url(image/00${i+1}.png)`)

banner.appendChild(lastImageDiv);
imageDiv[imageDiv.length - 1].div.style.backgroundImage = `url(image/001.png)`

setInterval(function(){
    banner.style.transform = `translate(${-1728 * ++count}px)`;
    if(count == 6) {count = -1;}
}, 2000);