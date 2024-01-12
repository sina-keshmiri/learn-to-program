/*
Implement a binary search function that takes an array of sorted numbers ('arr') and 
a target number ('target'). The function should return 'true' if the target number is present in the array and 'false' otherwise. 
Ensure that your solution has a time complexity of O(log n).

IMPORTANT NOTE TO THINK ABOUT IS: SORTED ARRAY ex: arr = [1, 2, 3, 4, 5, 6, 7, 8, 10] target: 7
*/

/*
[1, 2, 3, 4, 5, 6, 7, 8, 10] target: 7
^            ^             
*/

export default function bs_list(arr: number[], target: number): boolean {
    let lo = 0
    let hi = arr.length

    while(lo < hi) {
        const m = Math.floor(lo + (hi - lo) / 2)
        const v = arr[m]

        if (v === target) return true
        else if (v > target) {
            hi = m
        } else {
            lo = m + 1
        }
    }

    return false
}