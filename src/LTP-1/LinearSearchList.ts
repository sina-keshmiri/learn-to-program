/*
Implement a binary search function that takes an array of numbers ('arr') and 
a target number ('target'). The function should return 'true' if the target number is present in the array and 'false' otherwise. 
*/

export default function linear_search(arr: number[], target: number): boolean {
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === target) return true
    }

    return false
}