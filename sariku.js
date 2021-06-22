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

function StrokeLine(p1, p2) {
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
    ctx.closePath();
}

function StrokeCircle(p, r) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, r, 0, Math.PI*2);
    ctx.stroke();
    ctx.closePath();
}

function FillCircle(p, r) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, r, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
}

class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    Length() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y))
    }

    normalize() {
        let h = this.Length()
        this.x /= h;
        this.y /= h;
    }

    ReturnNormalized() {
        let h = this.Length()
        return new Vector2(this.x / h, this.y / h)
    }

    mult(vector) {
        this.x *= vector.x;
        this.y *= vector.y;
    }

    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }

    minus(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
    }

    Scale(amount) {
        this.x *= amount;
        this.y *= amount;
    }

    ReturnScaled(amount) {
        return new Vector2(this.x * amount, this.y * amount)
    }
}