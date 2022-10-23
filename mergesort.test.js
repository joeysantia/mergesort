import mergeSort from './mergesort'

test("sorts an array of integers", () => {
    expect(mergeSort([1,6,3,8,9,5,4,7,2])).toEqual([1,2,3,4,5,6,7,8,9])
})

test("returns an empty array if the input is an empty array", () => {
    expect(mergeSort([])).toEqual([])
})