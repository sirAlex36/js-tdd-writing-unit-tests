import { isPalindrome } from "../isPalindrome";

describe("isPalindrome", () => {
  it("returns true for a palindrome like 'racecar'", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome like 'car'", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("returns true for mixed case palindromes like 'Mom'", () => {
    expect(isPalindrome("Mom")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error if word contains non-alphabetic characters", () => {
    expect(() => isPalindrome("racecar1")).toThrow("Input must contain only letters");
  });

  it("throws an error if input is not a string", () => {
    expect(() => isPalindrome(12321)).toThrow("Input must be a string");
  });
});
