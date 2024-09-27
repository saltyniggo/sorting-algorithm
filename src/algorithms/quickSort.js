import { delay } from "../composables/delay";

export async function quickSort(arr, updateArray, time) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  const sortedLeft = await quickSort(leftArr, updateArray);
  const sortedRight = await quickSort(rightArr, updateArray);

  const sortedArray = [...sortedLeft, pivot, ...sortedRight];

  updateArray(sortedArray);
  await delay(time);

  return sortedArray;
}
