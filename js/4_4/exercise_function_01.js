function verificaPalindrome(string) {
    let array = string.split("");
    let palindrome = true;
    for (let i in array) {
      if (array[i] != string[(string.length - 1) - i]) {
        palindrome = false;
      }
    }
    return palindrome;
  }
console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));