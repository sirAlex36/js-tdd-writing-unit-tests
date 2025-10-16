export function isPalindrome(word) {
  // Validate input type
  if (typeof word !== "string") {
    throw new Error("Input must be a string");
  }

  // Check empty string first
  if (word.length === 0) {
    return false;
  }

  // Check alphabetic-only
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("Input must contain only letters");
  }

  // Normalize case
  const normalized = word.toLowerCase();

  // Compare string to its reverse
  const reversed = normalized.split("").reverse().join("");
  return normalized === reversed;
}
