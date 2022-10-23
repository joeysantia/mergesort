export default function mergeSort(arr) {

    let n = arr.length

    if (n === 0 || n === 1) {
        return arr
    }

    let half = n / 2
    let leftArr = mergeSort(arr.slice(0, half))
    let rightArr = mergeSort(arr.slice(half, n))

    let l = 0;
    let r = 0;
    let s = 0;
    let sortedArr = [ ]

    while (l < half && r < half) {
        if (leftArr[l] < rightArr[r]) {
            sortedArr[s++] = leftArr[l++]
        } else {
            sortedArr[s++] = rightArr[r++]
        }
    }

    if (l < half) {
        sortedArr = sortedArr.concat(leftArr.slice(l, half))
    } else if (r < leftArr.length) {
        sortedArr = sortedArr.concat(rightArr.slice(r, half))
    }


    return sortedArr

}