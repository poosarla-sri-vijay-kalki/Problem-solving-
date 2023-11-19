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
