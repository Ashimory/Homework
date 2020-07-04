// move 
function moveStart(x,y) {
    penup()
    home()
    rt(90)
    fd(x)
    lt(90)
    fd(y)
    pendown()
};
// draw shape
function drawRect(width,height) {
    for (let i = 0; i < 2; i ++) {
        fd(height)
        lt(90)
        fd(width)
        lt(90)
    }
};
function drawSquare(side) {
    for (let i = 0; i < 4; i ++) {
        fd(side)
        lt(90)
    };
}
function drawCircle(radius) {
    step = 2*radius*Math.PI/1440
    for (i = 0; i < 1440; i++) {
        fd(step)
        lt(0.25)
    }
}
