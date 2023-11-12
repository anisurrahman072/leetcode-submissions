// More Optimized

export default function twoSum(nums, target) {
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    for (
      let index2ndElem = index + 1;
      index2ndElem < nums.length;
      index2ndElem++
    ) {
      const secondElement = nums[index2ndElem];
      if (element + secondElement == target) {
        return [index, index2ndElem];
      }
    }
  }
}
