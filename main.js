let circlePos;
let squarePos;

function setup() { //Setup runs once before frame
    circlePos = new Vector2(canvas.width / 2, canvas.height / 2);
    squarePos = new Vector2(canvas.width / 2, canvas.height / 2);
}

function frame(dt) { //dt is optional, frame runs every frame
    let size = canvas.height * 0.1; //10% of the screen

    //Draw square and circle
    ctx.fillRect(squarePos.x, squarePos.y, size, size);
    FillCircle(circlePos, size);

    //Update circle position based on mouse (could directly do circlePos = mouse, but doesent show why it works, they're both Vector2)
    circlePos.x = mouse.x;
    circlePos.y = mouse.y;

    //Left and right inputs for square
    if(input.KeyD) {
        squarePos.x += 10 * (dt/16);
    }
    if(input.KeyA) {
        squarePos.x -= 10 * (dt/16);
    }

    //Up and down inputs for square
    if(input.KeyW) {
        squarePos.y -= 10 * (dt/16);
    }
    if(input.KeyS) {
        squarePos.y += 10 * (dt/16);
    }
}