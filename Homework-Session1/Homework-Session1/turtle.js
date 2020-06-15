// square:
clear()
for (i = 0; i < 4; i++) {
    fd (100)
    lt(90);
  }
// equilateral triangle:
clear()
lt(30)
for (i = 0; i<3; i++) {
    lt(120)
    fd(100)
}
// circle:
clear()
for (i = 0; i < 1440; i++) {
    fd(0.5)
    lt(0.25)
}
// multi-circle:
clear()
for(i = 0; i < 6; i++) {
    for (j = 0; j < 1440; j++) {
        fd(0.5)
        lt(0.25)
    }
    lt(60)
}
// multi-multi-circle:
clear()
for(i = 0; i < 60; i++) {
    for (j = 0; j < 1440; j++) {
        fd(0.5)
        lt(0.25)
    }
    lt(6)
}
// overkill:
clear()
for(i = 0; i < 60; i++) {
    for (j = 0; j < 1440; j++) {
        fd(0.5)
        lt(0.25)
    }
    lt(6)
}
