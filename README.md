Time Complexity

```js
let countLength = function (str) {
  return str.length; //what will be the time complexity
};
```

- It is constant `O(n)`.
- You might confused how js find the length by going to each character for the string.
- But string is an Object and length its a property of an object so it is a property lookup.
