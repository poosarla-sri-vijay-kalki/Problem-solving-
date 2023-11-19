// Problem: You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// prblem url: https://leetcode.com/problems/climbing-stairs

/**
 * @param {number} n
 * @return {number}
 *
 * This is the brute force method.
 * The implementation involves recursion
 *
 */
var climbStairs = function (n) {
  if (n == 1) return 1;
  if (n == 0) return 1;
  return climbStairs(n - 1) + climbStairs(n - 2);
};

/**
 * @param {number} n
 * @return {number}
 *
 * this is implemented using memorizationand recursion
 * in this way duplicate iterations are eliminated
 */

var climbStairs = function (n) {
  var climbStairsMemo = [];
  if (n < climbStairsMemo.length && !isNaN(climbStairsMemo[n]))
    return climbStairsMemo[n];
  if (n == 1) return 1;
  if (n == 0) return 1;
  climbStairsMemo[n] = climbStairs(n - 1) + climbStairs(n - 2);
  return climbStairsMemo[n];
};

/**
 * @param {number} n
 * @return {number}
 *
 * this is implemented using tabulation.
 * This decreases the meomory as no memory is require for stack frame(recursive function frame's memory)
 *
 */

var climbStairsMemo = [];
climbStairsMemo[0] = 1;
climbStairsMemo[1] = 1;
var climbStairs = function (n) {
  console.log(climbStairsMemo[0]);
  for (let i = 2; i <= n; i++) {
    climbStairsMemo[i] = climbStairsMemo[i - 1] + climbStairsMemo[i - 2];
  }
  return climbStairsMemo[n];
};

/**
 * @param {number} n
 * @return {number}
 *
 * apart from tabuliation sinc we need only the previous 2 values, we can save only those values.
 * This will optimize memory further.
 *
 */

var climbStairs = function (n) {
  let current = 0;
  let previous = 1;
  let secondPrevious = 1;
  if (n == 1) return 1;
  for (let i = 2; i <= n; i++) {
    current = previous + secondPrevious;
    secondPrevious = previous;
    previous = current;
  }
  return current;
};
