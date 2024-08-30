export function shellSort(arr) {
  let n = arr.length;
  let sortedArr = [...arr]; // Create a copy of the input array

  // Start with a gap of half the length of the array and reduce it in each iteration
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // Perform insertion sort on subarrays defined by the gap
    for (let i = gap; i < n; i += 1) {
      let temp = sortedArr[i]; // Store the current element

      let j;
      // Shift elements of the subarray towards the right until the correct position is found
      for (j = i; j >= gap && sortedArr[j - gap] > temp; j -= gap) {
        sortedArr[j] = sortedArr[j - gap]; // Move the element to the right
      }
      sortedArr[j] = temp; // Place the stored element at its correct position
    }
  }

  return sortedArr; // Return the sorted array
}
