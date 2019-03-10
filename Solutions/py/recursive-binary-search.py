def recursiveBinarySearch(arr, p, r, x):
    if p > r:
        return None
    else:
        q = (p+r)//2
        if arr[q] == x:
            return q
        elif arr[q] > x:
            return recursiveBinarySearch(arr, p, q - 1, x)
        elif arr[q] < x:
            return recursiveBinarySearch(arr, q + 1, r, x)


testArr = [3, 5, 7, 9, 22, 6, 9, 2]
print(recursiveBinarySearch(testArr, 0, len(testArr), 2))
