import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PokemonResult } from '../types/PokemonResult';
import { capitalizeFirstLetter } from '../helpers/stringFormatting';

export const PokeInfo = (props: PokeInfoProps) => {
    const { height, weight, type } = props;

    return (
        <View style={styles.info}>
            <Text>Type: {type}</Text>
            <Text>Height: {height}</Text>
            <Text>Weight: {weight}</Text>
        </View>
    )
}
type PokeInfoProps = {
    height: string,
    weight: string,
    type: string
}

const styles = StyleSheet.create({
    info: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20
    },
});
