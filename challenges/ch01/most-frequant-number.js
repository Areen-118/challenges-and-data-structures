
function mostFrequentNumber(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array.");
  }

  const count = {};
  let maxCount = 0;
  let result = null;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    count[num] = (count[num] || 0) + 1;

    // If this number becomes the new max, update result
    if (count[num] > maxCount) {
      maxCount = count[num];
      result = num;
    }

    // If tied frequency, pick the earlier number in the array
    else if (count[num] === maxCount && result !== num) {
      // Do nothing — we keep the first one we found
    }
  }

  return result;
}
console.log("Most Frequent Number:", mostFrequentNumber([1, 2, 3, 2, 4, 1, 2])); // Example usage
