const caesarCipher = function (str, shift) {
  let result = ''
  if(typeof str !== 'string') result = 'input is not a string'
  for (let i = 0; i < str.length; i++) {
    let charCode = str[i].charCodeAt()
    //check that charCode is a lowercase letter; auto ignores non-letters
    if (charCode > 96 && charCode < 123) {
      charCode += shift % 26 //need to make it work with shifts greater than 26 (total letters in alphabet)
      if (charCode > 122) {
        //reset the shift to 'a' and futher if it goes past 'z'
        charCode = charCode - 122 + 96
      } else if (charCode < 97) {
        //do the same if it goes below 'a' shift to 'z' and prior
        charCode = charCode - 97 + 123
      }
    }
    //check that charCode is an uppercase letter; ignores non-letters
    if (charCode > 64 && charCode < 91) {
      charCode += shift % 26
      if (charCode > 90) {
        charCode = charCode - 90 + 64
      } else if (charCode < 65) {
        charCode = charCode - 65 + 91
      }
    }
    result += String.fromCharCode(charCode)
  }
  return result
}

// Do not edit below this line
module.exports = caesarCipher
