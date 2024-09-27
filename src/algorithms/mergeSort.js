import { delay } from "../composables/delay";

export async function mergeSort(arr, updateArray, time) {
  const sortedArray = await mergeSortAlg(arr, updateArray, time);
  updateArray(sortedArray);
  return sortedArray;
}

async function mergeSortAlg(array, updateArray, time) {
  const half = Math.floor(array.length / 2);

  if (array.length < 2) {
    return array;
  }

  const left = array.slice(0, half);
  const right = array.slice(half);

  const sortedLeft = await mergeSortAlg(left, updateArray, time);
  const sortedRight = await mergeSortAlg(right, updateArray, time);

  return merge(sortedLeft, sortedRight, updateArray, time);
}

async function merge(left, right, updateArray, time) {
  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }

    await delay(time);
    updateArray([...arr, ...left, ...right]);
  }

  return [...arr, ...left, ...right];
}
