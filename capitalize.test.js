const capitalize = require('./capitalize.js')

test('returns string', () => {
  const str = 5
  expect(typeof capitalize(str)).toBe('string')
})

test('returns with first char capitalized', () => {
    expect(capitalize('frog')).toBe('Frog')
    expect(capitalize('Frog')).toBe('Frog')
    expect(capitalize('jOHN')).toBe('JOHN')
    expect(capitalize(56)).toBe('56')
})
