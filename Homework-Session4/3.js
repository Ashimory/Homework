arr = [1, 2, 4, 6, [3, 5], [10, 12]].flat();
sum = 0;
for (i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);
plusSized = arr.map(function plusSize(item) {
    return item+10
});
console.log(plusSized)