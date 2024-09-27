import { delay } from "../composables/delay";

export async function heapSort(arr, updateArray, time) {
  async function heapSortAlg(array) {
    let size = array.length;

    for (let i = Math.floor(size / 2 - 1); i >= 0; i--) {
      await heapify(array, size, i);
    }

    for (let i = size - 1; i >= 0; i--) {
      let temp = array[0];
      array[0] = array[i];
      array[i] = temp;

      updateArray([...array]);
      await delay(time);

      await heapify(array, i, 0);
    }
  }

  async function heapify(array, size, i) {
    let max = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < size && array[left] > array[max]) {
      max = left;
    }

    if (right < size && array[right] > array[max]) {
      max = right;
    }

    if (max !== i) {
      let temp = array[i];
      array[i] = array[max];
      array[max] = temp;

      updateArray([...array]);
      await delay(time);

      await heapify(array, size, max);
    }
  }

  await heapSortAlg(arr);
  return arr;
}
