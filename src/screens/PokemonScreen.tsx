import React, { useState } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { PokemonResult } from '../types/PokemonResult';
import { PokeCard } from '../components/PokeCard';
import { getPokemon } from '../helpers/getPokemon';
import { TYPE_COLORS } from '../constants';

export const PokemonScreen = ({ navigation, route }) => {
    const { pokemonArray } = route.params;

    const [displayedPokemon, setDisplayedPokemon] = useState(pokemonArray);

    const loadMorePokemon = async () => {
        const nextPokemonIndex = displayedPokemon.length + 1;
        const finalPokemonIndex = nextPokemonIndex + 20;
        const newPokemon: PokemonResult[] = await getPokemon(nextPokemonIndex, finalPokemonIndex);
        const newDisplayedPokemon = displayedPokemon.concat(newPokemon);
        setDisplayedPokemon(newDisplayedPokemon);
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={displayedPokemon}
                renderItem={({ item }) => <PokeCard pokemon={item} />}
                keyExtractor={item => item.id.toString()}
                onEndReachedThreshold={0.5}
                onEndReached={loadMorePokemon}
                ListFooterComponent={<ActivityIndicator size={'large'} />}
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