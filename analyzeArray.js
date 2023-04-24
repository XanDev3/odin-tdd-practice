function analyzeArray (arr) {
  const obj = {
    average: null,
    min: null,
    max: null,
    length: null
  }
  if (!isNumberArray(arr)) return 'please only add an array of numbers'
  else {
    //Array.protype.sort sorts Array lexicographically not numerically so we have to pass in a function that will sort numerically by comparing a an b
    const sortedArray = arr.sort((a, b) => a - b) //Array.protype.sort
    obj.min = sortedArray[0]
    obj.max = sortedArray[sortedArray.length - 1]
    obj.length = sortedArray.length
    obj.average = findArrayAvg(sortedArray)
    return obj
  }
}
const isNumberArray = numArr => numArr.every(ele => typeof ele === 'number')
const findArrayAvg = arr => {
  const length = arr.length
  const sum = arr.reduce((a, b) => a + b)
  const avg = sum / length
  return avg
}

module.exports = analyzeArray
