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

    <div class="algorithm-description">
      <h3>{{ algorithmDetails[selectedAlgorithm].name }} Algorithm</h3>
      <p>{{ algorithmDetails[selectedAlgorithm].description }}</p>
      <ul>
        <li>
          <strong>Time Complexity (Best):</strong>
          {{ algorithmDetails[selectedAlgorithm].complexity.best }}
        </li>
        <li>
          <strong>Time Complexity (Average):</strong>
          {{ algorithmDetails[selectedAlgorithm].complexity.average }}
        </li>
        <li>
          <strong>Time Complexity (Worst):</strong>
          {{ algorithmDetails[selectedAlgorithm].complexity.worst }}
        </li>
        <li>
          <strong>Space Complexity:</strong>
          {{ algorithmDetails[selectedAlgorithm].spaceComplexity }}
        </li>
      </ul>
    </div>
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

const algorithmDetails = {
  quick: {
    name: "Quick Sort",
    description:
      "Quick Sort is a highly efficient sorting algorithm that uses a divide-and-conquer approach to sort elements. It picks a pivot and partitions the array into two halves, recursively sorting each.",
    complexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n^2)",
    },
    spaceComplexity: "O(log n)",
  },
  radix: {
    name: "Radix Sort",
    description:
      "Radix Sort is a non-comparative sorting algorithm that sorts numbers digit by digit, starting from the least significant to the most significant digit.",
    complexity: {
      best: "O(nk)",
      average: "O(nk)",
      worst: "O(nk)",
    },
    spaceComplexity: "O(n + k)",
  },
  shell: {
    name: "Shell Sort",
    description:
      "Shell Sort is an optimization over Insertion Sort, where the array is initially divided into smaller subarrays, and sorting is done on progressively smaller gaps.",
    complexity: {
      best: "O(n log n)",
      average: "O(n(log n)^2)",
      worst: "O(n(log n)^2)",
    },
    spaceComplexity: "O(1)",
  },
  bubble: {
    name: "Bubble Sort",
    description:
      "Bubble Sort is a simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.",
    complexity: {
      best: "O(n)",
      average: "O(n^2)",
      worst: "O(n^2)",
    },
    spaceComplexity: "O(1)",
  },
  selection: {
    name: "Selection Sort",
    description:
      "Selection Sort repeatedly finds the minimum element from the unsorted part of the list and swaps it with the first unsorted element.",
    complexity: {
      best: "O(n^2)",
      average: "O(n^2)",
      worst: "O(n^2)",
    },
    spaceComplexity: "O(1)",
  },
  bucket: {
    name: "Bucket Sort",
    description:
      "Bucket Sort works by distributing elements into several buckets and then sorting each bucket individually, typically using another algorithm.",
    complexity: {
      best: "O(n + k)",
      average: "O(n + k)",
      worst: "O(n^2)",
    },
    spaceComplexity: "O(n + k)",
  },
  heap: {
    name: "Heap Sort",
    description:
      "Heap Sort is a comparison-based sorting algorithm that builds a max-heap from the input data and then repeatedly extracts the maximum element from the heap.",
    complexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)",
    },
    spaceComplexity: "O(1)",
  },
  insertion: {
    name: "Insertion Sort",
    description:
      "Insertion Sort is a simple sorting algorithm that builds the sorted array one element at a time by repeatedly taking the next element and inserting it into its correct position.",
    complexity: {
      best: "O(n)",
      average: "O(n^2)",
      worst: "O(n^2)",
    },
    spaceComplexity: "O(1)",
  },
  merge: {
    name: "Merge Sort",
    description:
      "Merge Sort is a stable, divide-and-conquer sorting algorithm that splits the array into halves, sorts each half, and then merges them into a sorted array.",
    complexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)",
    },
    spaceComplexity: "O(n)",
  },
};

function initializeArray(size = 10) {
  startArray.value = Array.from({ length: size }, (_, i) => i + 1);
  currentArray.value = [...startArray.value];
  sortingArray.value = [...startArray.value];
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
  sortingArray.value = [...startArray.value];
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
.algorithm-description {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
}

h3 {
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

ul li {
  margin: 5px 0;
}

strong {
  color: #333;
}
</style>
