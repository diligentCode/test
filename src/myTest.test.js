import {
  capitalize,
  reverseString,
  calculator,
  cc,
  analyseArr,
} from "./index.js";
import { describe, expect, test } from "@jest/globals";

describe("First char to upperCase", () => {
  test("Return first char capital", () => {
    expect(capitalize("home")).toBe("Home");
  });

  test("Return firt char capital", () => {
    expect(capitalize("school")).toBe("School");
  });

  test("Return firt char capital", () => {
    expect(capitalize("clean")).toBe("Clean");
  });

  test("Return firt char capital", () => {
    expect(capitalize("")).toBe("");
  });

  test("Return firt char capital", () => {
    expect(capitalize("a")).toBe("A");
  });

  test("Return firt char capital", () => {
    expect(capitalize(undefined)).toBe("undefined string");
  });

  test("Return firt char capital", () => {
    expect(capitalize(null)).toBe("undefined string");
  });
});

describe("reverse a string", () => {
  test("Throw error undefined", () => {
    expect(() => reverseString()).toThrow("String is undefined");
  });
  test("String is empty", () => {
    expect(reverseString("")).toBe("");
  });
  test("Single Length", () => {
    expect(reverseString("A")).toBe("A");
  });
  test("Reverse string", () => {
    expect(reverseString("abc")).toBe("cba");
  });
  test("Reverse string", () => {
    expect(reverseString("321")).toBe("123");
  });
});

describe("calculator", () => {
  test("addition no argument", () => {
    expect(() => calculator.add()).toThrow(
      "Both Numbers are required and should be valid",
    );
  });
  test("Single argument", () => {
    expect(calculator.add(1)).toBe(1);
  });
  test("subtract", () => {
    expect(calculator.sub(4, 3)).toBe(1);
  });
  test("undefined subtract", () => {
    expect(() => calculator.sub()).toThrow(
      "Both Numbers are required and should be valid",
    );
  });
  //Similarly do fo divide and multiplication dont forget to
  //tale care of divide by  0
});

describe("CeasarCipher", () => {
  test("Convert CC", () => {
    expect(cc("ABC", 3)).toBe("DEF");
  });
  test("Convert CC", () => {
    expect(cc("xyz", 3)).toBe("abc");
  });
  test("Convert CC", () => {
    expect(cc("XYZ", 3)).toBe("ABC");
  });
  test("Convert CC", () => {
    expect(cc("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
  test("Convert CC", () => {
    expect(() => cc()).toThrow("String and num are undefined");
  });
});

describe("analyseArr", () => {
  test("Analyse array", () => {
    expect(analyseArr([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
  test("Analyse empty array", () => {
    expect(analyseArr([])).toEqual({
      average: 0,
      min: 0,
      max: 0,
      length: 0,
    });
  });
  test("Analyse empty array", () => {
    expect(() => analyseArr()).toThrow("Array is not defined");
  });
});
