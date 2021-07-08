let number = "2618666";
let underline = 0;

function setup() {
    canvas.setAttribute("width", window.innerWidth * 0.5)
    generateNumber()
}

let counter = 0;
function frame(dt) {
    let digits = getLength(number)
    let textSize = canvas.offsetHeight * 0.8;
    let width = (textSize * 0.55) * digits;

    ctx.fillStyle = "black";
    ctx.font = `${textSize}px sans-serif`;
    ctx.textBaseline = "middle";
    ctx.fillText(number, 10, canvas.offsetHeight / 2);

    ctx.fillStyle = "#00a6bb";
    ctx.fillText(Math.round(underline / (1 / digits)).toString(), canvas.offsetWidth * 0.6, canvas.offsetHeight / 2);

    ctx.fillStyle = "#27b100";
    ctx.fillText(number.substring(0,Math.round(underline / (1 / digits))), 10, canvas.offsetHeight / 2);

    ctx.fillStyle = "#f53c3c";
    ctx.fillRect(10,canvas.offsetHeight - canvas.offsetHeight * 0.08 - 20, width * underline, canvas.offsetHeight * 0.06)

    underline += 0.01;
    if(underline > 1) {
        underline = 1;

        counter += dt;
        if(counter > 1000) {
            generateNumber();
            underline = 0;
            counter = 0;
        }
    }
}

function generateNumber() {
    let digits = Math.floor(getRandom(2, 7));
    number = "";
    number += Math.floor(getRandom(1, 10)).toString()
    for(let i = 1; i < digits; i++) {
        number += Math.floor(getRandom(0, 10)).toString()
    }
}

function resize() {
    canvas.setAttribute("width", window.innerWidth * 0.5)
}