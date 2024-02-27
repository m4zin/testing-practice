import {capitalize} from "../scripts/capitalize";

test('First char is not capitalized.', () => {
    expect(capitalize('happy'))
        .toBe('Happy')
})

test('First char already capitalized.', () => {
    expect(capitalize('123'))
        .toBe('123')
})


test('Inputted number returned.', () => {
    expect(capitalize('123'))
        .toBe('123')
})
