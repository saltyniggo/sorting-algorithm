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
import { quickSort, radixSort, shellSort } from "../algorithms/algorithms.js";

const startArray = ref([]);
const currentArray = ref([]);
const sortingArray = ref([]);
const selectedAlgorithm = ref("quick");

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
  sortingArray.value = [...currentArray.value];
  switch (selectedAlgorithm.value) {
    case "quick":
      currentArray.value = await quickSort(currentArray.value);
      break;
    case "radix":
      currentArray.value = await radixSort(currentArray.value);
      break;
    case "shell":
      currentArray.value = await shellSort(currentArray.value);
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
