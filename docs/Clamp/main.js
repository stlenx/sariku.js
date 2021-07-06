class BarButNotCloneISwear {
    constructor(y, max) {
        this.y = y;
        this.max = max;
        this.value = 0;
    }

    draw() {
        let maxX = canvas.offsetWidth * this.max;
        let middle = canvas.offsetWidth * 0.5;

        ctx.fillStyle = "#3d3d3d";
        ctx.fillRect(middle - (maxX / 2), this.y + (canvas.offsetHeight * 0.2 - canvas.offsetHeight * 0.05 / 2), maxX, canvas.offsetHeight * 0.05)
        ctx.fillRect(middle - (maxX / 2), this.y, canvas.offsetWidth * 0.01, canvas.offsetHeight * 0.4)
        ctx.fillRect(middle + (maxX / 2), this.y, canvas.offsetWidth * 0.01, canvas.offsetHeight * 0.4)


        ctx.fillStyle = "#29b7ff"
        ctx.fillRect(this.value, this.y, canvas.offsetWidth * 0.01, canvas.offsetHeight * 0.4)
    }
}

let value = canvas.offsetWidth * 0.5 - ((canvas.offsetWidth * 0.9) / 2);
let bar1 = new BarButNotCloneISwear(0, 0.6);
let bar2 = new BarButNotCloneISwear(canvas.offsetHeight / 2, 0.9);
bar2.value = value;

function setup() {
    canvas.setAttribute("width", window.innerWidth * 0.5)
    value = canvas.offsetWidth * 0.5 - ((canvas.offsetWidth * 0.9) / 2);
    bar2.value = value;
}

function frame(dt) {
    bar1.draw()
    bar2.draw()

    let interval = dt / 16;
    value += 2 * interval;
    if(value > canvas.offsetWidth * 0.5 + ((canvas.offsetWidth * 0.9) / 2)) {
        value = canvas.offsetWidth * 0.5 - ((canvas.offsetWidth * 0.9) / 2);
    }
    bar2.value = value;
    bar1.value = Clamp(value, canvas.offsetWidth * 0.5 - ((canvas.offsetWidth * 0.6) / 2), canvas.offsetWidth * 0.5 + ((canvas.offsetWidth * 0.6) / 2))
}

function resize() {
    canvas.setAttribute("width", window.innerWidth * 0.5)
}