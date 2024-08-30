<template>
  <div>
    <algorithm-selection @algorithmSelected="selectedAlgorithm = $event" />
    <button-group
      @pressedRandomize="shuffleArray()"
      @pressedStart="startSorting()"
    />
    <array-container
      :startArray="startArray"
      :sortingArray="sortingArray"
      :currentArray="currentArray"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import AlgorithmSelection from "./AlgorithmSelection.vue";
import ButtonGroup from "./ButtonGroup.vue";
import ArrayContainer from "./ArrayContainer.vue";
import { quickSort, radixSort, shellSort } from "../algorithms/algorithms.js";

const startArray = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const currentArray = ref();
const sortingArray = ref([]);

const selectedAlgorithm = ref("");

function shuffleArray() {
  for (let i = startArray.value.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [startArray.value[i], startArray.value[j]] = [
      startArray.value[j],
      startArray.value[i],
    ];
  }
  currentArray.value = startArray.value;
}

function startSorting() {
  console.log(selectedAlgorithm.value);
  switch (selectedAlgorithm.value) {
    case "quick":
      currentArray.value = quickSort(currentArray.value);
      break;
    case "radix":
      currentArray.value = radixSort(currentArray.value);
      break;
    case "shell":
      currentArray.value = shellSort(currentArray.value);
      break;
    default:
      // Handle default case here
      break;
  }
}

onMounted(() => {
  currentArray.value = [...startArray.value];
});
</script>
