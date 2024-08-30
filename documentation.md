# Sort Algorithms

## Logarithmic Algorithms

### Quick Sort
**Complexity**
- **Average Complexity:** O(n log n)
- **Best Case:** O(n log n)
- **Worst Case:** O(n²)
- **Space Complexity:** O(log n) (average) - O(n) (worst case) 

**Description:** Quick Sort is a divide-and-conquer algorithm that selects a pivot element and partitions the array into two halves, one with elements less than the pivot and one with elements greater than the pivot. This process is recursively applied to the subarrays. Its average-case performance is very good, but in the worst case, its performance degrades to quadratic time.

**smaller elements - pivot element - bigger elements**

**left partition - pivot - right partition**

### Merge Sort
**Complexity**
- **Average Complexity:** O(n log n)
- **Best Case:** O(n log n)
- **Worst Case:** O(n log n)
- **Space Complexity:** O(n)

**Description:** Merge Sort is a stable, comparison-based sorting algorithm. It divides the array into two halves, sorts them recursively, and then merges the sorted halves. The merge operation takes linear time, and the overall time complexity is consistently O(n log n). It is particularly useful for sorting linked lists and large datasets stored on external storage.

### Heap Sort
**Complexity**
- **Average Complexity:** O(n log n)
- **Best Case:** O(n log n)
- **Worst Case:** O(n log n)
- **Space Complexity:** O(1)

**Description:** Heap Sort is a comparison-based sorting technique based on a binary heap data structure. The algorithm first builds a max heap from the input data and then repeatedly extracts the maximum element from the heap, placing it at the end of the array. This process is repeated until all elements are sorted.

## Quadratic Algorithms

### Bubble Sort
**Complexity**
- **Average Complexity:** O(n²)
- **Best Case:** O(n)
- **Worst Case:** O(n²)
- **Space Complexity:** O(n)

**Description:** Bubble Sort is a simple comparison-based algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process is repeated until the array is sorted. It’s easy to implement but inefficient for large datasets.

### Selection Sort
**Complexity**
- **Average Complexity:** O(n²)
- **Best Case:** O(n²)
- **Worst Case:** O(n²)
- **Space Complexity:** O(n)

**Description:** Selection Sort is another simple sorting algorithm that divides the input list into two parts: a sorted subarray and an unsorted subarray. The algorithm repeatedly selects the smallest (or largest, depending on sorting order) element from the unsorted subarray and moves it to the end of the sorted subarray. It has poor performance on large lists and is generally outperformed by more advanced algorithms.

### Insertion Sort
**Complexity**
- **Average Complexity:** O(n²)
- **Best Case:** O(n)
- **Worst Case:** O(n²)
- **Space Complexity:** O(1)

**Description:** Insertion Sort builds the sorted array one element at a time by repeatedly picking the next element and inserting it into its correct position among the previously sorted elements. It is efficient for small datasets and nearly sorted arrays, with a linear time complexity in the best case.

### Gnome Sort
**Complexity**
- **Average Complexity:** O(n²)
- **Best Case:** O(n)
- **Worst Case:** O(n²)
- **Space Complexity:** O(1)

**Description:** Gnome Sort is a simple comparison sort that is similar to insertion sort but with a different approach. It moves elements to their correct position by swapping with previous elements, and it only goes back when necessary, which gives it a behavior akin to a "walking" gnome.

### Shaker Sort 
**Complexity**
- **Average Complexity:** O(n²)
- **Best Case:** O(n)
- **Worst Case:** O(n²)
- **Space Complexity:** O(1)

**Description:** Shaker Sort is a variation of Bubble Sort that sorts in both directions, moving larger elements to the end of the array in one pass and smaller elements to the beginning in the next. This bi-directional sorting process helps reduce the number of comparisons in some cases.

### Odd Even Sort 
**Complexity**
- **Average Complexity:** O(n²)
- **Best Case:** O(n)
- **Worst Case:** O(n²)
- **Space Complexity:** O(1)

**Description:** Odd-Even Sort is a parallelized version of Bubble Sort. It repeatedly compares and swaps adjacent elements, first for odd indexed elements and then for even indexed ones. It is a relatively simple sort but not very efficient for large datasets.

### Pancake Sort
**Complexity**
- **Average Complexity:** O(n²)
- **Best Case:** O(n²)
- **Worst Case:** O(n²)
- **Space Complexity:** O(1)

**Description:** Pancake Sort is a comparison sort that works by repeatedly flipping the prefix of the array to move the largest unsorted element to its correct position. It is more of a theoretical algorithm, often used for educational purposes rather than practical applications.

## The Best

### Bogo Sort
**Complexity**
- **Average Complexity:** O((n+1)!)
- **Best Case:** O(n)
- **Worst Case:** O(∞)
- **Space Complexity:** O(1)

**Description:** Bogo Sort, also known as permutation sort or stupid sort, is an extremely inefficient sorting algorithm that repeatedly generates random permutations of the array until it happens to be sorted. It is mostly used as a joke or to illustrate inefficiency.

## Other Algorithms

### Bucket Sort
**Complexity** *(k → number of buckets)*
- **Average Complexity:** O(n + k)
- **Best Case:** O(n + k)
- **Worst Case:** O(n²)
- **Space Complexity:** O(n + k)

**Description:** Bucket Sort works by distributing elements into several "buckets" and then sorting each bucket individually, often using another sorting algorithm. It is most effective when the input is uniformly distributed over a range.

### Radix Sort
**Complexity**
- **Average Complexity:** O(nk)
- **Best Case:** O(nk)
- **Worst Case:** O(nk)
- **Space Complexity:** O(n + k)

**Description:** Radix Sort is a non-comparative integer sorting algorithm that sorts numbers by processing individual digits. It works by sorting the array multiple times, each time based on a different digit or group of digits. It is efficient for sorting large numbers of integers, particularly when the range of the integers is known.

### Shell Sort
**Complexity**
- **Average Complexity:** O(n log n) - O(n²)
- **Best Case:** O(n log n)
- **Worst Case:** O(n²)
- **Space Complexity:** O(1)

**Description:** Shell Sort is an in-place comparison sort that generalizes insertion sort by allowing the exchange of items that are far apart. The gap sequence is crucial for its performance, and various sequences (e.g., Knuth's sequence) provide different time complexities. It's more efficient than quadratic sorts, especially for medium-sized datasets.

---

# BIG O Notation

Big O notation is a mathematical concept used to describe the performance or complexity of an algorithm. Specifically, it characterizes the time or space requirements of an algorithm in terms of the size of the input data. Here’s a breakdown of what different Big O notations express:

### 1. O(1) – Constant Time
- **What it means:** The algorithm's running time is constant and does not change regardless of the input size.
- **Example:** Accessing an element in an array by index, like `arr[5]`, always takes the same amount of time no matter how large the array is.

### 2. O(log n) – Logarithmic Time
- **What it means:** The algorithm’s running time increases logarithmically as the input size increases. This means doubling the input size only slightly increases the number of operations needed.
- **Example:** Binary search is a common example. If you're searching for a number in a sorted array, each step cuts the search space in half, leading to logarithmic time complexity.

### 3. O(n) – Linear Time
- **What it means:** The running time of the algorithm increases linearly with the input size. If you double the input size, the running time doubles.
- **Example:** A simple loop that iterates through an array of `n` elements is an O(n) operation. For instance, finding the maximum value in an unsorted array by checking each element one by one.

### 4. O(n log n) – Linearithmic Time
- **What it means:** The running time increases in proportion to the input size multiplied by the logarithm of the input size. This is typical of efficient sorting algorithms.
- **Example:** Algorithms like Merge Sort and Quick Sort (on average) have this complexity. They combine linear and logarithmic behavior due to dividing and merging steps.

### 5. O(n²) – Quadratic Time
- **What it means:** The running time increases quadratically as the input size increases. If the input size doubles, the running time increases by a factor of four.
- **Example:** A nested loop where each loop iterates over `n` elements (like Bubble Sort) has quadratic time complexity. For every element, you have to compare it with every other element.

### 6. O(n³) – Cubic Time
- **What it means:** The running time increases cubically with the input size. Doubling the input size results in an eightfold increase in running time.
- **Example:** A triple nested loop iterating over `n` elements each would have this complexity
