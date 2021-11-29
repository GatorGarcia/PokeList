import { PokemonResult } from '../types/PokemonResult';
import { POKEMON_URL } from '../constants';

export const getPokemon = async (startIndex: number, endIndex: number): Promise<PokemonResult[]> => {
    const promises = [];

    for (let i=startIndex; i <= endIndex; i++) {
        promises.push(callPokemonApi(i));
    }

    const results = await Promise.all(promises)
        .catch((e) => {
            console.error(e);
            return [];
        });

    return results;
}

const callPokemonApi = async (index: number): Promise<PokemonResult> => {
    const result = await fetch(`${POKEMON_URL}${index}`);
    const json: PokemonResult = await result.json();
    return json;
}
