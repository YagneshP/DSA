## Time Complexity (Big O)

```js
let countLength = function (str) {
  return str.length; //what will be the time complexity
};
```

- It is constant `O(n)`.
- You might confused how js find the length by going to each character for the string.
- But string is an Object and length its a property of an object so it is a property lookup.

### How about Big O of push , shift and unshift

- for `arr.push()` is constant `O(n)` as we are adding an element at the back of array.

- for `arr.shift()` and `arr.unshift()` it is linear `O(n)` because when we add or remove an element from the front js need to shuffle other elements of the array to `i+1` index.

### What is memoization ?

- caching the value that function returns.

## Recursion

- When function calls itself.

### Recusion in 4 steps

1. Identify the **base case**.
2. Identify the **recursive case**.
3. Return where it is appropriate.
4. Write procedure for each case which brings you closer to the base case.

### Common pattern for recursion

- Wrapper functions
- Accumulators
