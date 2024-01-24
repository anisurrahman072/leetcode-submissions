const plusOne = function (digits = []) {
  //   console.log("AAA: ", digits.join(""));
  //   console.log("BBB: ", BigInt(digits.join("")) + BigInt(1));
  let digitsInString = String(BigInt(digits.join("")) + BigInt(1));

  //   console.log("DDD: ", digitsInString);

  let finalArray = digitsInString.split("");

  //   console.log(finalArray);

  return finalArray;
};

plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
