import React, { useEffect, useState } from 'react';
import { LoadingIndicator } from './src/components/LoadingIndicator';
import { PokeList } from './src/components/PokeList';
import { getPokemon } from './src/helpers/getPokemon';
import { PokemonResult } from './src/types/PokemonResult';

export default function App() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [pokemonArray, setPokemonArray] = useState<PokemonResult[]>([]);

  useEffect(() => {
    const callPokemonApi = async () => {
      const results = await getPokemon(1, 20);
      setPokemonArray(results);
      setLoaded(true);
    }

    callPokemonApi();
  }, [])

  return loaded ? <PokeList pokemonArray={pokemonArray}/> : <LoadingIndicator />;
}
