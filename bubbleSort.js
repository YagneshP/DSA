function bubbleSort(arr) {
  //start at index[0]

  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      // check with adjecent if greater swap them
      if (arr[i] > arr[i + 1]) {
        let swapValue = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swapValue;
      }
    }
  }
  return arr;
}

let arr1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(bubbleSort(arr1));
