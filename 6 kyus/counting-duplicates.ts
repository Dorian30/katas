/**
 * Count the number of Duplicates
 * Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
 *
 * Example
 * "abcde" -> 0 # no characters repeats more than once
 * "aabbcde" -> 2 # 'a' and 'b'
 * "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
 * "indivisibility" -> 1 # 'i' occurs six times
 * "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
 * "aA11" -> 2 # 'a' and '1'
 * "ABBA" -> 2 # 'A' and 'B' each occur twice
 *
 * @see https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
 */

const dc = (text: string) => {
  const string = text.toLowerCase();
  const map: { [char: string]: number } = {};

  let count = 0;

  for (const char of string) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char] += 1;
    }
  }

  for (const char in map) {
    if (map[char] > 1) {
      count += 1;
    }
  }

  return count;
};

// One liner: Alternative solution using Map and array methods
const _dc = (text: string) =>
  [
    ...text
      .toLowerCase()
      .split("")
      .reduce((map, char) => {
        map.set(char, (map.get(char) ?? 0) + 1);
        return map;
      }, new Map<string, number>())
      .values(),
  ].reduce(
    (count, charInstances) => (charInstances > 1 ? count + 1 : count),
    0,
  );
