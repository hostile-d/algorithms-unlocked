function selectionSort(arr, n) {
    for (let i = 0; i < n; i++) {
        let smallest = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        }
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    }
    return arr;
}

const unsortedArray = [4, 5, 22, 6, 3, 8, 1, 9];
const sortedArray = selectionSort(unsortedArray, unsortedArray.length);
console.log(sortedArray);
