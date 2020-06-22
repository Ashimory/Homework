setshape("rocket-large")
clear()
const colors = ["red", "gray", "blue", "purple", "cyan"]
for (let sq = 1; sq < 5; sq++) {
    color(colors[sq])
    for (let i = 0; i < 4; i++) {
        fd(50 * sq)
        rt(90)
    }
    
}

  