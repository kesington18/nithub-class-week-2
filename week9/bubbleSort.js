let arr = [20, 5, 3, 7, 142];
let n = arr.length;
for (let i = 0; i < n; i++) {
    let swapped = false;
    for (let j = 0; j < (n - i - 1); j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp;
            swapped = true
        }
    }
    if (!swapped) break;
}

console.log(arr);
