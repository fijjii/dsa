function recursiveBinarySearch(arr, target, start = 0, end = arr.length - 1) {
    // Base case: if the start index is greater than the end index, the target is not in the array
    if (start > end) {
      return -1;
    }
  
    // Find the middle index of the array
    const mid = Math.floor((start + end) / 2);
  
    // If the middle element is the target, return its index
    if (arr[mid] === target) {
      return mid;
    }
  
    // If the target is less than the middle element, search the left half of the array
    if (target < arr[mid]) {
      return recursiveBinarySearch(arr, target, start, mid - 1);
    }
  
    // If the target is greater than the middle element, search the right half of the array
    return recursiveBinarySearch(arr, target, mid + 1, end);
  }

  const arr = [1, 2, 3, 4, 5];
const target = 3;
const index = recursiveBinarySearch(arr, target);
console.log(index); // Output: 2