<template>
  <div class="algorithm-selection">
    <label for="algorithm">Choose a sorting algorithm:</label>
    <select
      id="algorithm"
      @change="$emit('algorithmSelected', $event.target.value)"
    >
      <option value="quick">Quick Sort</option>
      <option value="radix">Radix Sort</option>
      <option value="shell">Shell Sort</option>
    </select>
  </div>
</template>

<style scoped>
.algorithm-selection {
  margin-bottom: 20px;
}

select {
  margin-left: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>
