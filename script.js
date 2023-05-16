function oddOrEven(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum % 2 === 0 ? "even" : "odd";
}

// Test cases
console.log(oddOrEven([0]));             // Output: "even"
console.log(oddOrEven([0, 1, 4]));       // Output: "odd"
console.log(oddOrEven([0, -1, -5]));     // Output: "even"
