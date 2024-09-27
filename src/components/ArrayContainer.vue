<template>
  <div>
    <div>
      <label for="toggle-start-array">Show Starting Array:</label>
      <input type="checkbox" id="toggle-start-array" v-model="showStartArray" />
    </div>

    <div v-if="showStartArray">
      <h2>Starting Array:</h2>
      <div class="array-container">
        <p
          class="array-bar start"
          v-for="(item, index) in props.startArray"
          :key="'start-' + index"
          :style="{ height: item * 20 + 'px' }"
        >
          {{ item }}
        </p>
      </div>
    </div>

    <h2>Sorting Array:</h2>
    <div class="array-container">
      <p
        class="array-bar"
        v-for="(item, index) in props.sortingArray"
        :key="'sorting-' + index"
        :style="{ height: item * 20 + 'px' }"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

// Define props
const props = defineProps({
  startArray: Array,
  sortingArray: Array,
  currentArray: Array,
});

// Control visibility of the starting array
const showStartArray = ref(true);
</script>

<style scoped>
.array-container {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 210px;
  border: 1px solid #ddd;
  padding: 5px;
  margin: 40px 0;
}

.array-bar {
  width: 40px;
  background-color: #ff9800;
  text-align: center;
  margin: 0 3px;
  transition: height 0.3s ease-in-out;
  color: white;
  font-size: 18px;
}

.array-bar.start {
  background-color: #2196f3;
}
</style>
