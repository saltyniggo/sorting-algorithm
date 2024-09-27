import { delay } from "../composables/delay";

export async function bubbleSort(array, updateArray, time) {
  let length = array.length;
  let arr = [...array];
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        updateArray([...arr]);
        await delay(time);
      }
    }
  }
  return arr;
}
