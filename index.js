function isPalindrome(word) {
  
  word = word.toLowerCase().replace(/[^a-z]/g, '');
  
  for (let i = 0, j = word.length - 1; i < j; i++, j--) {
    if (word[i] !== word[j]) {
      return false;
    }
  }
  
  return true;
}

/* 
  function isPalindrome(word):
  1. Convert the word to lowercase and remove any non-letter characters
  2. Loop through the word from both ends
    a. Compare each pair of characters to see if they match up
    b. If any pair of characters doesn't match, return false
  3. If the loop finishes without returning false, the word is a palindrome, so return true

*/

/*
  Convert the word to lowercase and remove any non-letter characters using regex
  Loop through the word from both ends and compare each pair of characters
  If any pair of characters doesn't match, return false
  If the loop finishes without returning false, the word is a palindrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"))
}

module.exports = isPalindrome;
