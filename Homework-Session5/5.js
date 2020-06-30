function is_inside(coordinates, area) {
    if (area[0] <= coordinates[0] && coordinates[0] <= area[0]+area[2] && area[1] <= coordinates[1] && coordinates[1] <= area[1]+area[3]) {
        return true
    }
    else {
        return false
    }
}
if (!is_inside([100, 120], [140, 60, 100, 200] && is_inside([200, 120], [140, 60, 100, 200]))) {
    console.log("Your function is correct")}
    else {
        console.log("Ooops, bugs detected")}