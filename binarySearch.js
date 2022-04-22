const array1 = [
  61, 24, 20, 58, 95, 53, 17, 32, 45, 85, 70, 20, 83, 62, 35, 89, 5, 95, 12, 86,
  58, 77, 30, 64, 46, 13, 5, 92, 67, 40, 20, 38, 31, 18, 89, 85, 7, 30, 67, 34,
  62, 35, 47, 98, 3, 41, 53, 26, 66, 40, 54, 44, 57, 46, 70, 60, 4, 63, 82, 42,
  65, 59, 17, 98, 29, 72, 1, 96, 82, 66, 98, 6, 92, 31, 43, 81, 88, 60, 10, 55,
  66, 82, 0, 79, 11, 81,
];
const array2 = [
  5, 25, 4, 39, 57, 49, 93, 79, 7, 8, 49, 89, 2, 7, 73, 88, 45, 15, 34, 92, 84,
  38, 85, 34, 16, 6, 99, 0, 2, 36, 68, 52, 73, 50, 77, 44, 61, 48,
];

var intersection = function (nums1, nums2) {
  //create an array which return
  const result = [];
  //create cache object
  const cache = {};
  //sort the second array
  nums2.sort((a, b) => a - b);
  // console.log("Sorted array", nums2);
  //another step to compare length and go thorugh that array
  //loop through num1 array
  for (let i = 0; i < nums1.length; i++) {
    let startIndex = 0;
    let lastIndex = nums2.length - 1;
    let midIndex;
    let element;
    // opt 1 without sort second array
    //if element in cache go to next
    if (cache[nums1[i]]) {
      // console.log("~~~~~~~~~~~~~~~");
      // console.log("cache", cache);
      // console.log("cached value", nums1[i]);
      continue;
    } else {
      while (startIndex <= lastIndex) {
        midIndex = Math.floor((lastIndex + startIndex) / 2);
        element = nums2[midIndex];
        if (element < nums1[i]) {
          startIndex = midIndex + 1;
        } else if (element > nums1[i]) {
          lastIndex = midIndex - 1;
        } else {
          // console.log("if same element", nums1[i]);
          result.push(nums1[i]);
          cache[nums1[i]] = true;
          break;
        }
      }
    }

    //opt 2 with sort second array
  }
  // console.log("result", result);
  return result;
};

intersection(array1, array2);
