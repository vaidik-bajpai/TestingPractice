const capitalise = require('./capitalise')

test('simple string', () => {
    expect(capitalise('vaidik')).toBe("Vaidik")
})

test('tracing spaces', () => {
    expect(capitalise('      bajpai')).toBe('Bajpai')
})

test('First charcter is digit', () => {
    expect(capitalise('123vaiD1k')).toBe('123vaiD1k')
})

test('Empty String', () => {
    expect(capitalise("")).toBe("")
})

test('Not a string', () => {
    expect(capitalise(5)).toBeUndefined()
})