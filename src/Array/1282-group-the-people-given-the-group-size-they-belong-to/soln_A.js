const groupThePeople = function (groupSizes) {
  let hashMap = {};

  for (let index = 0; index < groupSizes.length; index++) {
    let element = hashMap[groupSizes[index]]; // element == [[], [], []]

    if (
      element &&
      element.length > 0 &&
      element[element.length - 1] &&
      element[element.length - 1].length >= groupSizes[index]
    ) {
      element = [...element, [index]];
      console.log("THE INDEX 1111: ", index, element);
    } else if (
      element &&
      element.length > 0 &&
      element[element.length - 1] &&
      element[element.length - 1].length < groupSizes[index]
    ) {
      let lastItem = [...element[element.length - 1], index];
      element.pop();
      element = [...element, lastItem];
      console.log("THE INDEX 2222: ", index, element);
    } else {
      element = [[index]];
      console.log("THE INDEX 3333: ", index, element);
    }

    hashMap[groupSizes[index]] = element;
  }

  console.log("AA:", hashMap);

  let finalArraySoln = [];

  for (const key in hashMap) {
    finalArraySoln = [...finalArraySoln, ...hashMap[key]];
  }

  return finalArraySoln;
};
console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
