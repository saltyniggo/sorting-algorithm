<template>
  <div class="button-group">
    <button @click="$emit('pressedRandomize')">Randomize Array</button>
    <button @click="$emit('pressedStart')">Start Sorting</button>
  </div>
</template>

<style scoped>
.button-group {
  margin: 20px 0;
}

button {
  background-color: #09599c;
  color: white;
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}
</style>
