export function mergeSortAlg(arr) {

    // this function is used to split the array into two halves
    function mergeSort(array) {
        const half = Math.floor(array.length / 2);

        // if the length of the array is less than 2 return the array
        if (array.length < 2) {
            return array;
        }

        // split the array into two halves
        const left = array.splice(0, half); // slice if orignal array should not be modified
        const right = array.splice(half); // slice if orignal array should not be modified

        // recursively merge the two halves and return the sorted array
        return merge(mergeSort(left), mergeSort(right));
    }

    //This function takes two sorted arrays (left and right half) and merges them into a single sorted array.
    //It compares the first element of each array and pushes the smaller element into the result array (arr).
    //As soon as one of the arrays is empty, the remaining elements of the other array are appended to the result.
    function merge(left, right) {
        let arr = [];

        while (left.length && right.length) {
            if (left[0] < right[0]) {
                arr.push(left.shift());
            } else {
                arr.push(right.shift());
            }
        }

        return [...arr, ...left, ...right];
    }

    return mergeSort(arr);
}