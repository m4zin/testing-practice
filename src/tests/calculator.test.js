import {calculator} from "../scripts/calculator";

test('Addition', () => {
    expect(calculator.add(1, 2)).toBe(3)
})

test('Subtraction', () => {
    expect(calculator.sub(1, 2)).toBe(-1)
})

test('Division', () => {
    expect(calculator.div(1, 2)).toBe(0.5)
})

test('Multiplication', () => {
    expect(calculator.multi(1, 2)).toBe(2)
})

