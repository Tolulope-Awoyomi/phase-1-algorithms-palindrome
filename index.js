function isPalindrome(word) {
  const wordValue = word.split('');
  const reverseWordValue = wordValue.reverse();
  const reverseWord = reverseWordValue.join('');
  if (word === reverseWord) {
    return true
  }
  else {
    return false
  }
}
isPalindrome("abba")

/* 
  Add your pseudocode here:
  Write a function called isPalindrome(word) 
  declare variables wordValue, reverseWordValue and reverseWord and assign .split, .reverse and .join respectively
  run an if statement to return true if word equals reverseWord variable
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
