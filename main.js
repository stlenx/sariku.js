let squareX = 0;
let circleX = 0;

function frame(dt) {
    let size = canvas.height * 0.1; //10% of the screen
    ctx.fillRect(squareX, canvas.height/2, size, size);
    FillCircle(new Vector2(circleX, size), size);

    squareX += 10 * (dt/16);
    circleX += 5 * (dt/16);
    if(squareX > canvas.width) squareX = 0;
    if(circleX > canvas.width) circleX = 0;
}