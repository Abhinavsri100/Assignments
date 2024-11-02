/**
 * Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
 *   What's Anagram?
 *   - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
 *
 * @format
 */
function isAnagram(s1, s2) {
  if (s1.length() != s2.length()) return false;
  const a = s1.toLowerCase().split("").sort().join(""); //split coverts string to array of character then sort sort it lexicographically then join again makes it string
  const b = s2.toLowerCase().split("").sort().join("");
  if (a == b) return true;
  return false;
}
