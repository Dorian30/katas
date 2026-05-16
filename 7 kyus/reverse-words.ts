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
