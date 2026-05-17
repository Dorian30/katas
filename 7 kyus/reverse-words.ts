/**
 * Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
 *
 * Examples
 * "This is an example!" ==> "sihT si na !elpmaxe"
 * "double  spaces"      ==> "elbuod  secaps"
 */

// One liner O(n)
export const rw = (str: string): string =>
  str
    .split("")
    .map((_, idx, arr) => arr.at(-(idx + 1)))
    .join("")
    .split(" ")
    .map((_, idx, arr) => arr.at(-(idx + 1)))
    .join(" ");

// One liner O(n) with arr reverse native method
export const _rw = (str: string): string =>
  Array.from(str).reverse().join("").split(" ").reverse().join(" ");

// More imperative solution. Still O(n) but with better space complexity.
export const __rw = (str: string): string => {
  let reversedString = "";
  let word = "";

  for (let idx = 0; idx < str.length; idx++) {
    const char = str[str.length - (idx + 1)];
    if (char === " ") {
      if (word) {
        reversedString = " " + word + reversedString;
        word = "";
      } else {
        reversedString = " " + reversedString;
      }
    } else {
      word += char;
    }
  }

  return word + reversedString;
};
