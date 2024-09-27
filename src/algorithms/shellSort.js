import { delay } from "../composables/delay";

export async function shellSort(arr, updateArray, time) {
  let n = arr.length;
  let sortedArr = [...arr];

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i += 1) {
      let temp = sortedArr[i];
      let j;

      for (j = i; j >= gap && sortedArr[j - gap] > temp; j -= gap) {
        sortedArr[j] = sortedArr[j - gap];
        updateArray([...sortedArr]);
        await delay(time);
      }
      sortedArr[j] = temp;

      updateArray([...sortedArr]);
    }
  }

  return sortedArr;
}
