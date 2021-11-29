import { getPokemon } from '../getPokemon';
import { PokemonResponse } from '../../../__mocks__/PokemonResponse.mock';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(PokemonResponse),
  }),
) as jest.Mock;

describe('getPokemon', () => {
    it('returns an array of the correct length', async () => {
        const results = await getPokemon(1, 10);
        expect(results.length).toBe(10);
    })
    it('returns values in the expected format', async () => {
        const results = await getPokemon(1, 2);
        expect(results[0].name).toBe('bulbasaur');
    })
    it('returns a value if start index === end index', async () => {
        const results = await getPokemon(1, 1);
        expect(results.length).toBe(1);
    })
    it('returns a blank array if bad indicies are given', async () => {
        const results = await getPokemon(1, -1);
        expect(results.length).toBe(0);
    })
    it('returns a blank array if non-numbers are given', async () => {
        const results = await getPokemon('a', 'b');
        expect(results.length).toBe(0);
    })
    it('returns a blank array if call errors', async () => {
        fetch.mockImplementationOnce(() => Promise.reject("Call rejected"));
        const results = await getPokemon(1, 2);
        expect(results.length).toBe(0);
    })
})
