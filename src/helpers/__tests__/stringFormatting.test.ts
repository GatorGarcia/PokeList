import { capitalizeFirstLetter } from '../stringFormatting';

describe('capitalizeFirstLetter', () => {
    it('capitalizes the first letter of the given input', () => {
        const result = capitalizeFirstLetter('test');
        expect(result).toBe('Test');
    })
    it('returns an empty string if nothing is passed in', () => {
        const result = capitalizeFirstLetter('');
        expect(result).toBe('');
    })
    it('returns an empty string if undefined is passed in', () => {
        const result = capitalizeFirstLetter(undefined);
        expect(result).toBe('');
    })
    it('returns the same string if it starts with a number', () => {
        const result = capitalizeFirstLetter('1test');
        expect(result).toBe('1test');
    })
})