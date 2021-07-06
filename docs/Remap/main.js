class Bar {
    constructor(y, max) {
        this.y = y;
        this.max = max;
        this.value = 0;
    }

    draw() {
        ctx.fillStyle = "#3d3d3d";
        let maxX = canvas.offsetWidth * this.max;

        ctx.fillRect(0, this.y + (canvas.offsetHeight * 0.2 - canvas.offsetHeight * 0.05 / 2), maxX, canvas.offsetHeight * 0.05)

        ctx.fillStyle = "#29b7ff"
        ctx.fillRect(maxX * this.value, this.y, canvas.offsetWidth * 0.01, canvas.offsetHeight * 0.4)
        ctx.fillStyle = "#3d3d3d";

        ctx.fillRect(0, this.y, canvas.offsetWidth * 0.01, canvas.offsetHeight * 0.4)
        ctx.fillRect(maxX, this.y, canvas.offsetWidth * 0.01, canvas.offsetHeight * 0.4)
    }

    update(dt) {
        let interval = dt / 16;
        this.value += 0.002 * interval;
        if(this.value > 1) {
            this.value = 0;
        }
    }
}


let bar1 = new Bar(0, 0.6);
let bar2 = new Bar(canvas.offsetHeight / 2, 0.9);

function setup() {
    canvas.setAttribute("width", window.innerWidth * 0.5)
}

function frame(dt) {
    bar1.draw()
    bar2.draw()

    bar1.update(dt)
    bar2.update(dt)
}

function resize() {
    canvas.setAttribute("width", window.innerWidth * 0.5)
}