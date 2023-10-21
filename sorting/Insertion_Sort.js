// Insertion Sort


function insertionSort(arr) {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    // Select the current element to be compared
    let currentElement = arr[i];
    
    // Compare with elements to the left and move them to the right
    let j = i - 1;
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the current element in its correct position
    arr[j + 1] = currentElement;
  }

  return arr;
}

// Example usage:
const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 64]


// Recursive Method

function insertionSortRecursive(arr, n = arr.length) {
  // Base case: If array has only one element, it's already sorted
  if (n <= 1) {
    return arr;
  }

  // Sort the first n-1 elements
  insertionSortRecursive(arr, n - 1);

  // Insert the last element into its correct position in the sorted array
  const lastElement = arr[n - 1];
  let j = n - 2;

  // Move elements greater than lastElement to the right
  while (j >= 0 && arr[j] > lastElement) {
    arr[j + 1] = arr[j];
    j--;
  }

  // Insert lastElement in its correct position
  arr[j + 1] = lastElement;

  return arr;
}

// Example usage:
const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = insertionSortRecursive(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 64]
