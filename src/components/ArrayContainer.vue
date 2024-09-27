<template>
  <div>
    <h2>Starting Array: {{ props.startArray }}</h2>
    <div class="array-container">
      <p
        class="array-bar"
        v-for="(item, index) in props.sortingArray"
        :key="index"
        :style="{ height: item * 20 + 'px' }"
      >
        {{ item }}
      </p>
    </div>
    <h2>Sorted Array: {{ props.currentArray }}</h2>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  startArray: Array,
  sortingArray: Array,
  currentArray: Array,
});
</script>

<style scoped>
.array-container {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 300px;
  border: 1px solid #ddd;
  padding: 10px;
  margin-top: 20px;
}

.array-bar {
  width: 30px;
  background-color: #4caf50;
  text-align: center;
  margin: 0 5px;
  transition: height 0.3s ease-in-out;
}
</style>
