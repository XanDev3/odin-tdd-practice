const reverseString = require('./reverseString')

test('returns string', () => {
    const str = 5
    expect(typeof reverseString(str)).toBe('string')
})

test('one string returns string reversed', () =>{
    expect(reverseString('five')).toBe('evif')
})

test('multiple strings returns strings in reverse order, reversed', () =>{
    expect(reverseString('five four three')).toBe('eerht ruof evif')
})