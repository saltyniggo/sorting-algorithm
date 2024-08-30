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

**Description:** Merge Sort is a stable, comparison-based sorting algorithm. The algorithm divides the data structure recursively until the subsequences contain only one element. At this point, the subsequences get merged and ordered sequentially. To do so, the algorithm progressively builds the sorted sublist by adding each time the minimum element of the next two unsorted subsequences until there is only one sublist remaining. This will be the sorted data structure. The merge operation takes linear time, and the overall time complexity is consistently O(n log n). It is particularly useful for sorting linked lists and large datasets stored on external storage.

It can be implemented iteratively or recursively, using the Top-Down and Bottom-Up algorithms respectively.

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

**Complexity** _(k → number of buckets)_

- **Average Complexity:** O(n + k)
- **Best Case:** O(n + k)
- **Worst Case:** O(n²)
- **Space Complexity:** O(n + k)

**Description:** Bucket Sort works by distributing elements into several "buckets" and then sorting each bucket individually, often using another sorting algorithm. It is most effective when the input is uniformly distributed over a range.

### Radix Sort

**Complexity**

- **Average Complexity:** O(d × (n + b))
- **Best Case:** O(d × (n + b))
- **Worst Case:** O(d × (n + b))
- **Space Complexity:** O(n + 2^d)

**Description:** Radix Sort is a sorting algorithm that doesn't use comparisons. Its complexity depends, in addition to the number of elements, by the values b and d, representing the radix of the numbers and the maximum number of digits of the elements respectively.

Radix Sort works by splitting the elements into buckets, according to their radix, starting from the least significant digit (LSD) or from the most significant digit (MSD) of the number. If the number has more than one significant digit, this process is repeated to account all the digits of the number.

It's a particular sorting algorithm really different from the others as it is not based on comparisons, but on the digits of the number instead, so it's only applicable on whole numbers or strings.

It can be faster than other logarithmic sorting algorithms on big data structures as it can even perform in linear time in special cases, but it's not widely used due to its limitations.

### Shell Sort

**Complexity**

- **Average Complexity:** O(n × log n)
- **Best Case:** O(n × log n)
- **Worst Case:** O(n²)
- **Space Complexity:** O(1)

**Description:** Shell Sort is one of the oldest sorting algorithms and it's an extension of the Insertion Sort. This algorithm is fast and easy to implement, but it's hard to measure its performances.

Unlike Insertion Sort, Shell Sort starts by comparing the elements distant from each other by a certain gap that gets progressively decreased. By starting with the most distant elements, it can optimize performances as it's not limited by just comparing two adjacent elements.

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
