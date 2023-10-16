// kadane's algorithm

function maxSubArraySum(arr) {
  let max = arr[0];
  let currentMax = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentMax = Math.max(arr[i], currentMax + arr[i]);
    max = Math.max(max, currentMax);
  }

  return max;
}

console.log(maxSubArraySum([-2, -3, 4, -1, -2, 1, 5, -3])); // 7