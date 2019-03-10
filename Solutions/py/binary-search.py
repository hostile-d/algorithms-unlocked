def binarySearch(arr, n, x):
    p = 0
    r = n
    while p <= r:
        q = (p+r)//2
        if arr[q] == x:
            return q
        elif arr[q] > x:
            r = q - 1
        elif arr[q] < x:
            p = q + 1
    return None


testArr = [1, 2, 3, 4, 5, 6]
print(binarySearch(testArr, len(testArr), 7))
