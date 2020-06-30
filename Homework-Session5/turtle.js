clear()
function drawSquare(length,colour) {
    color(colour);
    for (i = 0; i < 4; i++) {
      fd (length);
      lt(90);
    } 
  }
  for (let i = 0; i  < 30; i ++){
    drawSquare(i * 5, 'red')
  lt(17)
  penup()
    fd(i * 2)
    pendown()
  }
  
// star
clear()
function drawStar(length) {
    rt(18)
    for (i = 0; i < 5; i++) {
        fd(length);
        rt(144);
      } 
}
drawStar(100)