export function insertionSort(arr, n)
{
    // n is the length of the array
    let i, key, j;

    // loop through the array starting from the second element
    for (i = 1; i < n; i++)
    {
        key = arr[i]; // store the current element in key
        j = i - 1; // store the index of the previous element

        while (j >= 0 && arr[j] > key) // loop through the array from the current element to the first element 
        {
            arr[j + 1] = arr[j]; // move the elements greater than the key to the right
            j = j - 1; // move to the previous element
        }
        arr[j + 1] = key; // insert the key in the correct position
    }
}

// Example
// arr = [3, 1, 4, 1, 5];
// Erster Schritt (i = 1)

// Key: arr[1] (also 1)
// Array wird durchlaufen, um die richtige Position für key zu finden:
// Vergleiche key mit arr[0] (also 3):
// Da 1 < 3, verschiebe 3 nach rechts.
// arr wird zu: [3, 3, 4, 1, 5]
// Setze key an die korrekte Position:
// arr wird zu: [1, 3, 4, 1, 5]