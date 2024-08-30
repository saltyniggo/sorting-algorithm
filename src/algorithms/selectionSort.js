export function selectionSort(arr) {


    for (var i = 0; i < arr.length; i++) { // loop through the array
        let min = i; // store the index of the current element
        for (var j = i + 1; j < arr.length; j++) { // loop through the array starting from the next element
            if (arr[min] > arr[j]) { // if the current element is greater than the next element
                min = j; // update the index of the current element
            }
        }
        if (i != min) { // if the current element is not the minimum element
            [arr[ i ],arr[min]]= [arr[min],arr[ i ]]; // swap the current element with the minimum element
        } 
    }
    return arr
}

// Example
// arr = [64, 25, 12, 22, 11];
// Erster Schritt (i = 0)
// Initiales Minimum: min = 0 (also 64)
// Suche nach dem kleinsten Element im unsortierten Teil ([64, 25, 12, 22, 11]):
// Vergleiche 64 mit 25:
// 25 < 64, also wird min auf 1 gesetzt.
// Vergleiche 25 mit 12:
// 12 < 25, also wird min auf 2 gesetzt.
// Vergleiche 12 mit 22:
// 22 > 12, min bleibt 2.
// Vergleiche 12 mit 11:
// 11 < 12, also wird min auf 4 gesetzt.
// Tausche das Element an der Position 0 mit dem Element an der Position 4:
// arr = [11, 25, 12, 22, 64]