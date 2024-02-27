import {caesarCipher} from "../scripts/caesarCipher";

test('One word', () => {
    expect(caesarCipher('hello', 3)).toBe('khoor')
})

test('Two words', () => {
    expect(caesarCipher('Hello world', 3)).toBe('khoor zruog')
})

test('Numbers', () => {
    expect(caesarCipher(123, 3)).toBe(false)
})

test('Large shift', () => {
    expect(caesarCipher('niagra', 50)).toBe('lgyepy')
})

test('Very Large shift', () => {
    expect(caesarCipher('niagra', 300)).toBe('bwoufo')
})

test('z should now be a', () => {
    expect(caesarCipher('z', 1)).toBe('a')
})
