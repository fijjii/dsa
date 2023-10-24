// Function to check if a string is a palindrome
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert the string to lowercase
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Compare the original string with its reverse
  // If they are the same, it's a palindrome; otherwise, it's not
  return str === str.split('').reverse().join('');
}

// Test cases
const testString1 = "A man, a plan, a canal, Panama";
const testString2 = "racecar";
const testString3 = "hello world";

console.log(isPalindrome(testString1)); // Should return true
console.log(isPalindrome(testString2)); // Should return true
console.log(isPalindrome(testString3)); // Should return false
