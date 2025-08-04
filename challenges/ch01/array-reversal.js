function ArrayReversal(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array.");
  }

  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
console.log("Reversed Array:", ArrayReversal([1, 2, 3, 4, 5])); // Example usage
