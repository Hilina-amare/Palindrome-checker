function palindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (str === str.split('').reverse().join('')){
      return true;
    };
    return false;
  }
  
  palindrome("eye");