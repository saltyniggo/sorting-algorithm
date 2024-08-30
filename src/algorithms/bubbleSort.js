export function bubbleSort(arr) {
    let length = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let k = 0; k < length - 1; k++) {
            if (arr[k] > arr[k + 1]) {
                [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]];
                swapped = true;
            }
        }
        length--; // Reduce the range of the next iteration
    } while (swapped);

    return arr;
}