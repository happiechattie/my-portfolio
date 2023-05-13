const barleft = document.getElementsByClassName("bar")[0];
const body = document.getElementsByTagName("body")[0];
let COLORSi = 0;
let BGi = 0;

const bgimg = ["url(./images/stone.jpg)", "url(./images/bluebg.jpg)", "url(./images/ice.jpg)", "url(./images/bg.jpg)"];
const colors = ["#576880", "#7C8BA8", "#B6BDCE", "#FFF"];

function rotateColors() {
    barleft.style.backgroundColor = colors[COLORSi];
    const colorsLengthLimit = colors.length - 1;
    if (COLORSi < colorsLengthLimit) {
        COLORSi += 1;}
    else {
        COLORSi = 0;
    }
}

function rotateBG() {
    body.style.background = bgimg[BGi];
    body.style.backgroundSize = "cover";
    const bgLengthLimit = bgimg.length - 1;
    if (BGi < bgLengthLimit) {
        BGi +=1;
    } else {
        BGi = 0;
    }
}

document.addEventListener("keydown", function(event){
    console.log(event);
    if (event.key === 'ArrowRight'){
        rotateBG();
    } else {
        return;
    }})