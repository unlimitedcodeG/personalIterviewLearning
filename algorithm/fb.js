function factorial(n) {
  console.trace();
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); //120)

function fibonacciMemoization(n) {
  const memo = [0, 1];
  const fibonacci = (n) => {
    if (memo[n] != null) return memo[n];
    return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)); // {3}
  };
  return fibonacci;
}
