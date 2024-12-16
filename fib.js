// Fibonacci with Memoization in P5.js
let memo = []; // Array to store computed Fibonacci numbers

function setup() {
  createCanvas(800, 400);
  noLoop();

  // Calculate Fibonacci numbers up to the 20th index
  let fibNumbers = [];
  for (let i = 0; i < 20; i++) {
    fibNumbers.push(fib(i));
  }

  // Display the calculated Fibonacci numbers
  for (let i = 0; i < fibNumbers.length; i++) {
    textSize(16);
    text(`Fib(${i}) = ${fibNumbers[i]}`, 20, 20 + i * 20);
  }
}

function fib(n) {
  if (n <= 1) {
    return n; // Base cases: Fib(0) = 0, Fib(1) = 1
  }

  // Check if the Fibonacci number has already been computed
  if (memo[n] !== undefined) {
    return memo[n];
  }

  // Compute and store the Fibonacci number in the memo array
  memo[n] = fib(n - 1) + fib(n - 2);
  return memo[n];
}
