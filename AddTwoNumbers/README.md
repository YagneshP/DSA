# Add Two Numbers (Leet Code)

### Import things

- Two linked list which are reverse order

```

2 -> 4 -> 3
5 -> 6 -> 4

342
465
-----
708
```

- As we required reverse sum of list, we have already reversed links , so we can traverse through links and add thier value

2 -> head for linklist 1
5 -> head for linklist 2

7 + 6 -> 13

carry = 1;
value = 3; sum % 10 -> reminder = 3
