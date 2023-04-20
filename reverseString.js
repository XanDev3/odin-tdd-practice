function reverseString (input) {
  const str = input.toString()
  //base case - recursive approach
  if (str === '') return ''
  else return reverseString(str.substring(1)) + str.charAt(0)
}

module.exports = reverseString

