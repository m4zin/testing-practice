import {reverseStr} from "../scripts/reverseString";

test('normal word', () => {
    expect(reverseStr('happy'))
        .toBe('yppah')
})

test('normal word', () => {
    expect(reverseStr('123'))
        .toBe('321')
})
