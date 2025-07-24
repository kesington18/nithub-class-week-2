const numbers: number[] = [2 ,6 ,0 ,9 ,3 , 1, 8, 7]

function insertionSort(array: number[]) {
    // create a for loop
    for (let i = 1; i < array.length; i++) { //i = 1 (first iteration), i = 2 (second iteration)
        let currentValue = array[i]; // 6,  0
        let j = i - 1; // 1-1 = 0, 2-1=1

        while (j >= 0 && array[j] > currentValue) { 
            // it should loop only when j is greater than 0 or equals to 0 AND array[j] > currentValue
            // array[j] = array[0] = 2 is it greater than 6 ? no end this loop
            // array[j] = array[1] = 6 is it greater than 2 ? yes continue
            array[j + 1] = array[j]; // [[empty], 2, 6]
            j--; // -1
        }
        if(array[j + 1] !== currentValue) array[j + 1] = currentValue; // [0, 2, 6, 9, 3, 1,]

    }
    console.log(array);
}

insertionSort(numbers);