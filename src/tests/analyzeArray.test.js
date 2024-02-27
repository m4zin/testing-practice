import {analyzeArray} from "../scripts/analyzeArray";

test('Unique integer array of length 5', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})

test('Array contains str elem', () => {
    expect(analyzeArray([1,8,3,4,2,'6'])).toBe(false)
})
