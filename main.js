function insertionSort(arr) {
    // Iterate from the second element to the end of the array
    for (let i = 1; i < arr.length; i++) {
        // Get the current element to be inserted
        let key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        // Insert the key element into its correct position
        arr[j + 1] = key;
    }

    return arr;
}

// Example usage
const array = [5, 2, 9, 1, 5, 6];
console.log("Original array:", array);
const sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);
