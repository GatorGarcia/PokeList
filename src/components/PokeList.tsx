import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PokemonResult } from '../types/PokemonResult';

export const PokeList = (props: PokeListProps) => {
    const { pokemonArray } = props;

    return (
        <View style={styles.container}>
            { pokemonArray.map(pokemon => {
                return <Text key={`${pokemon.name}Text`}>{pokemon.name}</Text>
            }) }
        </View>
    )
}

type PokeListProps = {
    pokemonArray: PokemonResult[]
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
