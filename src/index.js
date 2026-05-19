export function capitalize(str) {
  // if (str === "home") {
  //   return "Home";
  // } else if (str === "school") {
  //   return "School";
  // }

  if (typeof str !== "string") {
    return "undefined string";
  } else if (str === "") {
    return "";
  } else {
    return str[0].toUpperCase() + str.slice(1);
  }
}

export function reverseString(str) {
  if (typeof str !== "string") {
    throw new Error("String is undefined || Not a type string");
  } else if (str.length <= 1) {
    return str;
  } else {
    //With the help of reduce.
    // return str.split("").reduce((prev, curr) => {
    //   return curr + prev;
    // }, "");

    return str
      .split("")
      .map((val, index, array) => {
        return array[array.length - 1 - index];
      })
      .join("");
  }
}

export const calculator = {
  // add(a, b) {
  //   return a + b;
  // },
  // add() {
  //   return undefined;
  // },
  add(a, b) {
    if (a == undefined && b == undefined) {
      throw new Error("Both Numbers are required and should be valid");
    }
    if (b == undefined) {
      return a;
    }
    return a + b;
  },
  sub(a, b) {
    if (a == undefined || b == undefined) {
      throw new Error("Both Numbers are required and should be valid");
    }
    return a - b;
  },

  //Edge Cases only for add only
};

export function cc(str, num) {
  if (str === undefined || num === undefined) {
    throw new Error("String and num are undefined");
  }
  const charArr = str.split("");
  return charArr
    .map((val, ind, arr) => {
      let asci = val.charCodeAt(0);
      if (asci >= 97 && asci <= 122) {
        if (asci + num > 122) {
          let newAsci = num + asci - 123;
          return String.fromCharCode(97 + newAsci);
        } else {
          return String.fromCharCode(asci + num);
        }
      } else if (asci >= 65 && asci <= 90) {
        if (asci + num > 90) {
          let newAsci = num + asci - 91;
          return String.fromCharCode(65 + newAsci);
        } else {
          return String.fromCharCode(asci + num);
        }
      } else {
        return val;
      }
    })
    .join("");
}

export function analyseArr(arr) {
  // return {
  //   average: 4,
  //   min: 1,
  //   max: 8,
  //   length: 6,
  // };
  if (arr === undefined) {
    throw new Error("Array is not defined");
  }
  if (arr.length === 0) {
    return {
      average: 0,
      min: 0,
      max: 0,
      length: 0,
    };
  }
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  arr.forEach((val) => {
    min = Math.min(val, min);
    max = Math.max(val, max);
    sum = sum + val;
  });
  let length = arr.length;
  let average = sum / length;
  return { average, min, max, length };
}
