import { delay } from "../composables/delay.js";

export async function insertionSort(arr, updateArray, time) {
  const n = arr.length;
  let i, key, j;

  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;

      await delay(time);
      updateArray([...arr]);
    }
    arr[j + 1] = key;

    await delay(time);
    updateArray([...arr]);
  }
}
