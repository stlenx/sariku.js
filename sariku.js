let canvas = document.getElementById("canvas")
if(canvas.getAttribute('property') !== null) {
    switch (canvas.getAttribute('property')) {
        case "fullscreen": {
            canvas.setAttribute("width", window.innerWidth)
            canvas.setAttribute("height", window.innerHeight)
            break;
        }
        case "square": {
            canvas.setAttribute("width", window.innerHeight)
            break;
        }
    }
}
let ctx = canvas.getContext("2d");

let lastFrame = Date.now();
function animationFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    let now = Date.now();
    let dt = now - lastFrame;
    lastFrame = now;

    frame(dt)

    window.requestAnimationFrame(animationFrame)
}

if (typeof frame == 'function') {
    window.requestAnimationFrame(animationFrame)
}