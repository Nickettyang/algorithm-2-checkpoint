# Insertion Sort Algorithm

## Description

This project implements the **Insertion Sort** algorithm, a simple and intuitive sorting algorithm. The insertion sort algorithm builds a sorted portion of the array one element at a time by inserting the next element from the unsorted portion into its correct position within the sorted portion. It is well-suited for small datasets or nearly sorted arrays.

## How It Works

The insertion sort algorithm iterates through the array and works as follows:

1. **Start with the Second Element**: Begin with the second element in the array because a single-element array is trivially sorted.

2. **Key Element Selection**: For each iteration `i`, select the element `arr[i]` (referred to as the "key" element) from the unsorted portion of the array.

3. **Insertion into Sorted Portion**: Compare the key element with the elements in the sorted portion of the array (from index `0` to `i-1`).

4. **Shift Elements**: Shift elements in the sorted portion that are greater than the key element one position to the right.

5. **Place the Key Element**: Insert the key element into its correct position in the sorted portion.

6. **Repeat**: Move to the next element and repeat the process until all elements are inserted into the sorted portion.

### Example

Here’s a step-by-step example using the array `[4, 3, 2, 10, 12, 1, 5, 6]`:

1. **Initial Array**: `[4, 3, 2, 10, 12, 1, 5, 6]`
2. **i = 1**: Key = `3`, Sorted Portion = `[4]`
   - Resulting Array: `[3, 4, 2, 10, 12, 1, 5, 6]`
3. **i = 2**: Key = `2`, Sorted Portion = `[3, 4]`
   - Resulting Array: `[2, 3, 4, 10, 12, 1, 5, 6]`
4. **i = 3**: Key = `10`, Sorted Portion = `[2, 3, 4]`
   - Resulting Array: `[2, 3, 4, 10, 12, 1, 5, 6]`
5. **i = 4**: Key = `12`, Sorted Portion = `[2, 3, 4, 10]`
   - Resulting Array: `[2, 3, 4, 10, 12, 1, 5, 6]`
6. **i = 5**: Key = `1`, Sorted Portion = `[2, 3, 4, 10, 12]`
   - Resulting Array: `[1, 2, 3, 4, 10, 12, 5, 6]`
7. **i = 6**: Key = `5`, Sorted Portion = `[1, 2, 3, 4, 10, 12]`
   - Resulting Array: `[1, 2, 3, 4, 5, 10, 12, 6]`
8. **i = 7**: Key = `6`, Sorted Portion = `[1, 2, 3, 4, 5, 10, 12]`
   - Resulting Array: `[1, 2, 3, 4, 5, 6, 10, 12]`

## Usage

To use this implementation, simply include the `insertionSort.js` file in your project and call the `insertionSort` function with an array of numbers.

### Example Usage

```javascript
const insertionSort = require('./insertionSort');

const array = [4, 3, 2, 10, 12, 1, 5, 6];
const sortedArray = insertionSort(array);

console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 10, 12]
