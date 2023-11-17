var recursiveFibonacciIteratorCount = 0;

/**
 *
 * This function used to get  the fibonacci series using recursion
 * the time complexity O(n) = 2^n
 * This is not preferable for large numbers.
 * The space complexity is O(n) as those many stack frame are creaated during recursion.
 *
 */
function recursiveFibonacci(n) {
  recursiveFibonacciIteratorCount++;
  if (n <= 1) return n;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

// testing
var testNumber = 10;
console.log(recursiveFibonacci(testNumber));
console.log(
  `recursiveFibonacciIteratorCount for exectung for n = ${testNumber} is  ${recursiveFibonacciIteratorCount}`
);
recursiveFibonacciIteratorCount = 0;
console.log("----------------------------------------------------");
