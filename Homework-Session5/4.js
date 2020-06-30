function get_even_list(l) {
    return l.filter(num => num%2 ==0);
}
even_list = get_even_list([1, 2, 5, 9, -10, 6])
if (JSON.stringify(even_list) == JSON.stringify([2, -10, 6])){
    console.log("Your function is correct")}
else {
    console.log("Ooops, bugs detected")}

