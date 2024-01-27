const groupThePeople = function (groupSizes) {
  let tempGroups = {};
  let finalGroups = [];

  for (let index = 0; index < groupSizes.length; index++) {
    const size = groupSizes[index];

    // Check if that size has an array or not. If not then set an empty array
    if (!tempGroups[size]) {
      tempGroups[size] = [];
    }

    // Just push the Person
    tempGroups[size].push(index);

    // Check if a valid ARRAY already created. If created then push that Array into "finalGroups"
    if (tempGroups[size].length == size) {
      finalGroups.push(tempGroups[size]);
      tempGroups[size] = [];
    }
  }

  return finalGroups;
};
console.log(groupThePeople([2, 1, 3, 3, 3, 2]));
