<template>
  <div>
    <algorithm-selection @algorithmSelected="handleAlgorithmSelection" />
    <button-group
      @pressedRandomize="shuffleArray"
      @pressedStart="startSorting"
    />
    <array-container
      :startArray="startArray"
      :sortingArray="sortingArray"
      :currentArray="currentArray"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AlgorithmSelection from "./AlgorithmSelection.vue";
import ButtonGroup from "./ButtonGroup.vue";
import ArrayContainer from "./ArrayContainer.vue";
import {
  bubbleSort,
  bucketSort,
  heapSort,
  insertionSort,
  mergeSort,
  quickSort,
  radixSort,
  selectionSort,
  shellSort,
} from "../algorithms/algorithms.js";

const startArray = ref([]);
const currentArray = ref([]);
const sortingArray = ref([]);
const selectedAlgorithm = ref("quick");
const delayTime = ref(750);

function initializeArray(size = 10) {
  startArray.value = Array.from({ length: size }, (_, i) => i + 1);
  currentArray.value = [...startArray.value];
}

function shuffleArray() {
  for (let i = startArray.value.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [startArray.value[i], startArray.value[j]] = [
      startArray.value[j],
      startArray.value[i],
    ];
  }
  currentArray.value = [...startArray.value];
}

function handleAlgorithmSelection(algorithm) {
  selectedAlgorithm.value = algorithm;
}

async function startSorting() {
  const updateArray = (newArray) => {
    sortingArray.value = [...newArray];
  };

  sortingArray.value = [...currentArray.value];

  switch (selectedAlgorithm.value) {
    case "bubble":
      currentArray.value = await bubbleSort(
        currentArray.value,
        updateArray,
        delayTime.value
      );
      break;
    case "quick":
      currentArray.value = await quickSort(
        currentArray.value,
        updateArray,
        delayTime.value
      );
      break;
    case "radix":
      currentArray.value = await radixSort(
        currentArray.value,
        updateArray,
        delayTime.value
      );
      break;
    case "shell":
      currentArray.value = await shellSort(
        currentArray.value,
        updateArray,
        delayTime.value
      );
      break;
    case "selection":
      currentArray.value = await selectionSort(
        currentArray.value,
        updateArray,
        delayTime.value
      );
      break;

    case "heap":
      currentArray.value = await heapSort(
        currentArray.value,
        updateArray,
        delayTime.value
      );
      break;
    case "insertion":
      currentArray.value = await insertionSort(
        currentArray.value,
        updateArray,
        delayTime.value
      );
      break;
    case "merge":
      currentArray.value = await mergeSort(
        currentArray.value,
        updateArray,
        delayTime.value
      );
      break;
    case "bucket":
      currentArray.value = await bucketSort(
        currentArray.value,
        updateArray,
        delayTime.value
      );
      break;
    default:
      console.warn("Unknown sorting algorithm selected");
  }
}

onMounted(() => {
  initializeArray();
});
</script>

<style scoped>
/* You can define some global styles here */
</style>
