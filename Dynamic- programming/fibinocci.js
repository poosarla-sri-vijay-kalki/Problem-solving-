var recursiveFibonacciIteratorCount = 0;
var memorizationFibonacciIteratorCount = 0;

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

/**
 *
 * This function used to get the fibonacci series using a memorization
 * The Time complexity is O(n)
 * The Space complexity is O(n) +O(n)(for recursion stack + for memory)
 * Time wise this is good but it takes more space.
 *
 */
var fibonociiMemory = [];
function memorizationFibonacci(n) {
  memorizationFibonacciIteratorCount++;
  if (n < fibonociiMemory.length && !isNaN(fibonociiMemory[n]))
    return fibonociiMemory[n];
  if (n <= 1) {
    fibonociiMemory[n] = n;
  } else {
    fibonociiMemory[n] =
      memorizationFibonacci(n - 1) + memorizationFibonacci(n - 2);
  }
  return fibonociiMemory[n];
}

// testing
var testNumber = 10;
console.log(recursiveFibonacci(testNumber));
console.log(
  `recursiveFibonacciIteratorCount for exectung for n = ${testNumber} is  ${recursiveFibonacciIteratorCount}`
);
recursiveFibonacciIteratorCount = 0;
console.log("----------------------------------------------------");

console.log(memorizationFibonacci(testNumber));
console.log(
  `memorizationFibonacciIteratorCount for exectung for n = ${testNumber} is  ${memorizationFibonacciIteratorCount}`
);
memorizationFibonacciIteratorCount = 0;
console.log("----------------------------------------------------");
