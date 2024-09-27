import { delay } from "../composables/delay";

export async function bucketSort(arr, updateArray, time) {
  let n = arr.length;
  if (n <= 0) return arr;

  let max = Math.max(...arr);

  let buckets = Array.from({ length: n }, () => []);

  for (let i = 0; i < n; i++) {
    let bi = Math.floor((arr[i] / max) * (n - 1));
    buckets[bi].push(arr[i]);

    updateArray([...arr]);
    await delay(time);
  }

  for (let i = 0; i < n; i++) {
    insertionSort(buckets[i]);

    updateArray([...arr]);
    await delay(time);
  }

  let index = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      arr[index++] = buckets[i][j];

      updateArray([...arr]);
      await delay(time);
    }
  }

  return arr;
}

function insertionSort(bucket) {
  for (let i = 1; i < bucket.length; ++i) {
    let key = bucket[i];
    let j = i - 1;
    while (j >= 0 && bucket[j] > key) {
      bucket[j + 1] = bucket[j];
      j--;
    }
    bucket[j + 1] = key;
  }
}
