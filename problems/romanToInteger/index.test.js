const romanToInt = require(".")

describe('romanToInteger', () => {
    test('isInputValid', () => {
        const invalidResponse = null
        expect(romanToInt(null)).toBe(invalidResponse)
        expect(romanToInt(undefined)).toBe(invalidResponse)
        expect(romanToInt(1)).toBe(invalidResponse)
        expect(romanToInt({})).toBe(invalidResponse)
        expect(romanToInt(true)).toBe(invalidResponse)
        expect(romanToInt('')).toBe(invalidResponse)
        expect(romanToInt('s')).toBe(invalidResponse)
        expect(romanToInt('XXs')).toBe(invalidResponse)
        expect(romanToInt('XIXIXIXIXIXIXIXI')).toBe(invalidResponse)
    })
    
    test('isSingleCharCorrect', () => {
        expect(romanToInt('I')).toBe(1)
        expect(romanToInt('V')).toBe(5)
        expect(romanToInt('X')).toBe(10)
        expect(romanToInt('L')).toBe(50)
        expect(romanToInt('C')).toBe(100)
        expect(romanToInt('D')).toBe(500)
        expect(romanToInt('M')).toBe(1000)
    })

    test('isAscendingSequenceCorrect', () => {
        expect(romanToInt('II')).toBe(2)
        expect(romanToInt('III')).toBe(3)
        expect(romanToInt('VI')).toBe(6)
        expect(romanToInt('VII')).toBe(7)
        expect(romanToInt('VIII')).toBe(8)
        expect(romanToInt('XI')).toBe(11)
        expect(romanToInt('XII')).toBe(12)
        expect(romanToInt('XIII')).toBe(13)
        expect(romanToInt('XV')).toBe(15)
        expect(romanToInt('XVI')).toBe(16)
        expect(romanToInt('XVII')).toBe(17)
        expect(romanToInt('XVIII')).toBe(18)
        expect(romanToInt('XX')).toBe(20)
    })

    test('isDescendingSequenceCorrect', () => {
        expect(romanToInt('IV')).toBe(4)
        expect(romanToInt('IX')).toBe(9)
        expect(romanToInt('IXX')).toBe(19)
    })

    test('isMultipleSequenceCorrect', () => {
        expect(romanToInt('XIV')).toBe(14)
    })
})