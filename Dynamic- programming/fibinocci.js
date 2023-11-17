var recursiveFibonacciIteratorCount = 0;
var memorizationFibonacciIteratorCount = 0;
var tableFibonacciIteratorCount = 0;

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

// Tabluation Method

/**
 *
 *  This is the function using tabluation method
 *  The time complexity is O(n)
 *  The Space Compexisy is O(n)
 *  This has both pros and cons compared to the above method.
 *  Depends on the requirement we have select and use it.
 *
 */
var tabluationFibobacciMemory = [];
function tabluationFibobacci(n) {
  tabluationFibobacciMemory[0] = 0;
  tabluationFibobacciMemory[1] = 1;
  for (let i = 2; i <= n; i++) {
    tableFibonacciIteratorCount++;
    tabluationFibobacciMemory[i] =
      tabluationFibobacciMemory[i - 1] + tabluationFibobacciMemory[i - 2];
  }
  return tabluationFibobacciMemory[n];
}

/**
 * This is a space optimized abulation method.
 * store only required values
 */
var previous = 1;
var nextPrevious = 0;
function tabluationFibobacciNoMem(n) {
  let current;
  for (let i = 2; i <= n; i++) {
    current = previous + nextPrevious;
    nextPrevious = previous;
    previous = current;
  }
  return current;
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

console.log(tabluationFibobacci(testNumber));
console.log(
  `tableFibonacciIteratorCount for exectung for n = ${testNumber} is  ${tableFibonacciIteratorCount}`
);
tableFibonacciIteratorCount = 0;
console.log("----------------------------------------------------");

console.log(
  `using tabulation and no memory method ${tabluationFibobacciNoMem(
    testNumber
  )}`
);
console.log("----------------------------------------------------");
