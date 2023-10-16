// Function to check if any pair exists or not
function isSumExists(arr, x) {
    // create an empty Hash Map
    let map = {};
    
    // do for each element
    for (let i = 0; i < arr.length; i++) {
        // check if pair `(arr[i], x-arr[i])` exists
    
        // if difference is seen before, print the pair
        if (map[x - arr[i]]) {
        return true;
        }
    
        // store index of the current element in the map
        map[arr[i]] = i;
    }
    
    // we reach here if pair is not found
    return false;
    }

// Driver code
let arr = [3, 5, 2, 8, 11, 7];
let sum = 10;

console.log(isSumExists(arr, sum)); // true