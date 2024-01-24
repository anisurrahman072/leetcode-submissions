# [Problem Link](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)

# Solution

```javascript
let nums = [5, 7, 7, 7, 9, 9, 9, 12];

// While in for loop, Keep forwarding & just put the new unique item at the first of "nums"
// While putting, put that new unique item after the last unique item that was set before

// As the array is sorted, so to find a new unique item you can just check what was the last unique item you found.
// If the last unique item is same of current item then it is not unique.

function removeDuplicates(nums) {
  let lastIndexWhereUniqueItemWasSet = 0;

  for (let index = 0; index < nums.length; index++) {
    if (nums[lastIndexWhereUniqueItemWasSet] == nums[index]) {
      // As both are same that means current ITEM is same as the previous ITEM which i set as UNIQUE item.
    } else {
      ++lastIndexWhereUniqueItemWasSet;
      nums[lastIndexWhereUniqueItemWasSet] = nums[index];
    }
  }

  return ++lastIndexWhereUniqueItemWasSet;
}
```
