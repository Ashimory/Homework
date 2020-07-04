// const cmds = [
    //     {
    //         shape: 'square',
    //         x: 20,
    //         y: 40,
    //         width: 50,
    //     },
    //     {
    //         shape: 'rect',
    //         x: 8,
    //         y: 70,
    //         width: 12,
    //         height: 40,
    //     },
    //     {
    //         shape: 'rect',
    //         x: 70,
    //         y: 70,
    //         width: 12,
    //         height: 40,
    //     },
    //     {
    //         shape: 'rect',
    //         x: 10,
    //         y: 20,
    //         width: 70,
    //         height: 20,
    //     },
    //     {
    //         shape: 'square',
    //         x: 25,
    //         y: 40,
    //         width: 14,
    //     },
    //     {
    //         shape: 'square',
    //         x: 33,
    //         y: 42,
    //         width: 6,
    //     },
    //     {
    //         shape: 'square',
    //         x: 50,
    //         y: 40,
    //         width: 14,
    //     },
    //     {
    //         shape: 'square',
    //         x: 58,
    //         y: 42,
    //         width: 6,
    //     },
    //     {
    //         shape: 'square',
    //         x: 40,
    //         y: 25,
    //         width: 8,
    //     },
    //     {
    //         shape: 'square',
    //         penWidth: 1,
    //         x: 500,
    //         y: 500,
    //         width: 15,
    //     },
    // ]
const cmds = [
    {
        shape: 'circle',
        x: 0,
        y: -20,
        radius: 60,
    },
    {
        shape: 'circle',
        x: 0,
        y: 80,
        radius: 40,
    },
    {
        shape: 'circle',
        x: -75,
        y: 10,
        radius: 20,
    },
      {
        shape: 'circle',
        x: 75,
        y: 10,
        radius: 20,
    },
    {
        shape: 'square',
        x: -65,
        y: -100,
        width: 30,
    },
      {
        shape: 'square',
        x: 38,
        y: -100,
        width: 30,
    },
  
  {
        shape: 'rect',
        x: -30,
        y: 80,
        width: 20,
        height: 4
    },
    {
        shape: 'rect',
        x: 10,
        y: 80,
        width: 20,
        height: 4
    },
      {
        shape: 'rect',
        x: -10,
        y: 50,
        width: 20,
        height: 6
    },
  {
        shape: 'square',
        x: 200,
        y: 200,
        width: 20,
    },
]
function moveStart(x,y) {
    penup()
    home()
    rt(90)
    fd(x)
    lt(90)
    fd(y)
    pendown()
};
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
for (let s = 0; s < cmds.length; s++) {
    if (cmds[s].shape == 'square') {
        moveStart(cmds[s].x, cmds[s].y )
        drawSquare(cmds[s].width)
    }
    else if (cmds[s].shape == 'rect') {
        moveStart(cmds[s].x, cmds[s].y )
        drawRect(cmds[s].width,cmds[s].height)
    }
    else {
        moveStart(cmds[s].x, cmds[s].y )
        drawCircle(cmds[s].radius)
    }
}
// (the last square was too far away so I changed the coordinates)