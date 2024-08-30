<template>
  <div>
    <h2>Starting Array: {{ props.startArray }}</h2>
    <div class="array-container" id="array-container">
      <p class="array-bar" v-for="array in sortingArray" :key="array.id">
        {{ array }}
      </p>
    </div>
    <h2>Sorted Array: {{ currentArray }}</h2>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// Variables and Props
const props = defineProps(["startArray", "sortingArray", "currentArray"]);
</script>
