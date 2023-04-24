const caesarCipher = require('./caesarCipher.js')

test('test "abc" with shift 1 is "bcd"',() => {
    expect(caesarCipher('abc',1)).toBe('bcd')
})
test('test single characters work',() => {
    expect(caesarCipher('A',2)).toBe('C')
})
test('test non-strings work',() => {
    expect(caesarCipher(3,1)).toBe('input is not a string')
})
test('test case stays the same',() => {
    expect(caesarCipher('3AbcD e',1)).toBe('3BcdE f')
})
test('test negative shifts and wrapping back from A work',() => {
    expect(caesarCipher('A',-3)).toBe('X')
})
test('test strings with punctuation work',() => {
    expect(caesarCipher('A cat smacked a bat. Then a ball',-3)).toBe('X zxq pjxzhba x yxq. Qebk x yxii')
})