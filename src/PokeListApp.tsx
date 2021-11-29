import React, { useEffect, useState } from 'react';
import { LoadingIndicator } from './components/LoadingIndicator';
import { PokemonScreen } from './screens/PokemonScreen';
import { PokemonDetailsScreen } from './screens/PokemonDetailsScreen';
import { getPokemon } from './helpers/getPokemon';
import { PokemonResult } from './types/PokemonResult';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function PokeListApp() {
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

  if (!loaded) return <LoadingIndicator />;
  else return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pokemon List"
          component={PokemonScreen}
          initialParams={{ pokemonArray: pokemonArray }}
        />
        <Stack.Screen
          name="Pokemon Details"
          component={PokemonDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}