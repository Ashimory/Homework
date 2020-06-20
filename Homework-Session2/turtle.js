// "diamond flower"
clear()
setshape("rocket")
color("red")
rt(30)
for (petals = 0; petals < 4; petals ++) {
  for (i = 0; i < 2; i++) {
    fd(100)
    lt(60)
    fd(100)
    lt(120)
};
  rt(90)
}




// nested shapes
clear()
setshape("rocket-large")
rt(90)
for (i = 0; i < 18; i++) {
      if (i < 3) {
        color("blue")
        fd(100);
        lt(120);
    }
    else if (i < 7) {
      	color("red")
        fd(100);
        lt(90);
    }
    else if (i < 12) {
      	color("blue")
        fd(100);
        lt(72);
    }
    else {
      	color("red")
        fd(100);
        lt(60);
    }
}
  