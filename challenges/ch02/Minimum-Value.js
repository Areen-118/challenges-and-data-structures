function MinimumValue(arr) {
  if (arr.length === 0) return null; // Handle empty array
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
MinimumValue([3, 1, 4, 1, 5, 9, 2, 6, 5]); // Example usage
console.log("Minimum Value:", MinimumValue([3, 1, 4, 1, 5, 9, 2, 6, 5]));
