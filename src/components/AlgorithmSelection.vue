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
