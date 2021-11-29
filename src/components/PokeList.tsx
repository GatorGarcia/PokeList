import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { PokemonResult } from '../types/PokemonResult';
import { PokeCard } from './PokeCard';

export const PokeList = (props: PokeListProps) => {
    const { pokemonArray } = props;

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={pokemonArray}
                renderItem={({ item }) => <PokeCard pokemon={item} />}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

type PokeListProps = {
    pokemonArray: PokemonResult[]
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 50,
    },
    list: {
        width: '100%',
    },
});
