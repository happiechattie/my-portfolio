const bar = document.getElementsByClassName("resumeNav")[0];
console.log(bar);
let i = 0;

const colors = ["#FFA3FD", "#E384FF", "#865DFF", "#191825", null]

function rotateColors() {
    bar.style.backgroundColor = colors[i];
    if (i < colors.length) {
        i += 1;}
    else {i = 0;}
}

document.addEventListener("keydown", function(event){
        rotateColors();
    })