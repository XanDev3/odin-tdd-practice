const analyzeArray = require('./analyzeArray')

test('takes an array of numbers and if not numbers returns a string instead of an object',()=>{
    expect(analyzeArray(['a',2,'c'])).toBe('please only add an array of numbers')
    expect(analyzeArray(['1',2,'3'])).toBe('please only add an array of numbers')
    expect(analyzeArray([1,2,3])).toEqual({
        average:2,
        min:1,
        max:3,
        length:3
    })
})
test('objects min property to be the smallest number of array',()=>{
    expect(analyzeArray([2,1,3]).min).toBe(1)
})
test('objects max property to be the largest number of array',()=>{
    expect(analyzeArray([200,1,3,8]).max).toBe(200)
})
test('objects length property to be total number of elements in array',()=>{
    expect(analyzeArray([200,1,3,8]).length).toBe(4)
})
test('Odin project test case',()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      })
})
test('objects average property in an even numbered array not an element in the array', () =>{
    expect(analyzeArray([1,2,3,4])).toEqual({
        average:2.5,
        min:1,
        max:4,
        length:4
    })
})
