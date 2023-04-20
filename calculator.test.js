const calculator = require('./calculator.js')

test('calculator.add with numbers returns result truncated to 2 decimals', () => {
  expect(calculator.add(1, 2)).toBeCloseTo(3.0, 3)
  expect(calculator.add(1.2, 2.31)).toBeCloseTo(3.51, 3)
})

test('calculator.subtract returns result truncated to 2 decimals', () => {
  expect(calculator.subtract(1, 2)).toBeCloseTo(-1.0, 3)
})

test('calculator.divide returns result truncated to 2 decimals', () => {
  expect(calculator.divide(1, 2)).toBeCloseTo(0.5, 3)
})

test('calculator.multiply returns result truncated to 2 decimals', () => {
  expect(calculator.multiply(1, 2)).toBeCloseTo(2.0, 3)
})
