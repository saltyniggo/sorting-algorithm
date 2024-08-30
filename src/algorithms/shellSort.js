export function shellSort(arr) {
  let n = arr.length;
  // Start with a gap of half the length of the array and reduce it in each iteration
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // Perform insertion sort on subarrays defined by the gap
    for (let i = gap; i < n; i += 1) {
      let temp = arr[i]; // Store the current element

      let j;
      // Shift elements of the subarray towards the right until the correct position is found
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap]; // Move the element to the right
      }
      arr[j] = temp; // Place the stored element at its correct position
    }
  }

  return arr; // Return the sorted array
}
