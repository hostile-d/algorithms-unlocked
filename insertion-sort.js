function insertionSort(arr, n) {
    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j -= 1;
        }
        arr[j + 1] = key;
        console.log(arr);
    }
    return arr;
}
const testArr = [5, 3, 1, 2, 6, 4];
const sortedArr = insertionSort(testArr, testArr.length);
console.log(sortedArr);
