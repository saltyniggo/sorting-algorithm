<template>
  <div class="button-group">
    <button id="randomize-array" @click="$emit('pressedRandomize')">
      Randomize Array
    </button>
    <button id="start-sorting" @click="$emit('pressedStart')">
      Start Sorting
    </button>
  </div>
</template>

<script setup></script>
