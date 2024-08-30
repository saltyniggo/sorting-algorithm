export function heapSortAlg(arr) {

    function heapSort(array) {
        let size = array.length
      
        // heap-construction: build a max heap from the array
        // max heap: a binary tree where the parent is greater or equal than its children
        // the largest element is stored at the root
        // Math.floor(size / 2 - 1) is the index of the last parent node
        // loop runs backwards from the last parent node to the root node and calls heapify for each node to build the max heap
        for (let i = Math.floor(size / 2 - 1); i >= 0; i--)
          heapify(array, size, i)
      
        // heap-sort: repeatedly remove the largest element from the heap and add it to the end of the array
        // last element of the heap is swapped with the first element
        // after removing the largest element, the heapify function is called to rebuild the heap
        for (let i = size - 1; i >= 0; i--) {
          let temp = array[0]
          array[0] = array[i]
          array[i] = temp
          heapify(array, i, 0)
        }
      }
      
      function heapify(array, size, i) { // size is the current size of the heap; i is the index of the parent node
        let max = i
        let left = 2 * i + 1
        let right = 2 * i + 2

        //  left < size: left child exists
        // array[left] > array[max]: left child is greater than the parent ---> update max to index of left child
        if (left < size && array[left] > array[max])
          max = left
      
        //  right < size: right child exists
        // array[right] > array[max]: right child is greater than the parent ---> update max to index of right child
        if (right < size && array[right] > array[max])
          max = right
      
        // if child node is greater than parent node, swap them and call heapify recursly on the child to ensure the max heap property is maintained in the subtree
        if (max != i) {
          let temp = array[i]
          array[i] = array[max]
          array[max] = temp
      
          heapify(array, size, max)
        }
      }
    
    return heapSort(arr)

}
