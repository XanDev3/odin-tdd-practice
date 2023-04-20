const calculator = {
  add: (x, y) => {
    if (Number(x) === isNaN || Number(y) === NaN)
      return 'Error: can only evaluate numbers'
    else {
      const sum = x + y
      return Number(sum.toFixed(2))
    }
  },
  subtract: (x, y) => {
    if (Number(x) === isNaN || Number(y) === NaN)
      return 'Error: can only evaluate numbers'
    else {
      const diff = x - y
      return Number(diff.toFixed(2))
    }
  },
  divide: (x, y) => {
    if (Number(x) === isNaN || Number(y) === NaN)
      return 'Error: can only evaluate numbers'
    else if (y === 0) return 'Error: cannot divide by 0'
    else {
      const quot = x / y
      return Number(quot.toFixed(2))
    }
  },
  multiply: (x, y) => {
    if (Number(x) === isNaN || Number(y) === NaN)
      return 'Error: can only evaluate numbers'
    else {
      const prod = x * y
      return Number(prod.toFixed(2))
    }
  }
}

module.exports = calculator

