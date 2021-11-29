import React from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { PokemonResult } from '../types/PokemonResult';
import { capitalizeFirstLetter } from '../helpers/stringFormatting';
import { ActionButton } from './ActionButton';
import { PokeInfo } from './PokeInfo';
import { useNavigation } from '@react-navigation/core';

export const PokeCard = (props: PokeCardProps) => {
    const navigation = useNavigation();

    const { pokemon } = props;
    const { id, types } = pokemon;
    const name = capitalizeFirstLetter(pokemon.name);

    const img = pokemon.sprites.front_default;
    const move = pokemon.moves[0].move.name;
    const type = capitalizeFirstLetter(types[0].type.name)

    return (
        <Pressable style={styles.cardContainer} onPress={() => navigation.navigate('Pokemon Details', {name: name, img: img})}>
            <View style={styles.card}>
                <Text style={styles.id}>{id}</Text>
                <Image source={{ uri: img }} style={styles.image} />
                <Text style={styles.name}>{name}</Text>
                <PokeInfo {...pokemon} type={type} />
                <ActionButton {...pokemon} move={move} type={type}/>
            </View>
        </Pressable>

    )
}

type PokeCardProps = {
    pokemon: PokemonResult
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 20,
    },
    card: {
        width: '100%',
        marginBottom: 50,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 10,
    },
    name: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    id: {
        paddingTop: 10,
        paddingLeft: 10
    },
    image: {
        resizeMode: 'cover',
        height: 100,
        width: 100,
        alignSelf: 'center'
    },
});
