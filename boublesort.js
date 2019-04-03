const bubble = {};

bubble.swap = function(arr, i, num1, num2) {
  arr[i] = num2;
  arr[i + 1] = num1;
  return arr;
};

bubble.bubbleSort = function(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      counter++;
      bubble.swap(arr, i, arr[i], arr[i + 1]);
    }
  }
  if (counter === 0) {
    return arr;
  } else {
    return bubble.bubbleSort(arr);
  }
};
