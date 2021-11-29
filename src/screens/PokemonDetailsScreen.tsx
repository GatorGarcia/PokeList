import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export const PokemonDetailsScreen = (props: PokemonDetailsScreenProps) => {
    const { name, img } = props.route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: img }} style={styles.image} />
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

type PokemonDetailsScreenProps = {
    route: {
        params: {
            name: string,
            img: string
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
    image: {
        resizeMode: 'cover',
        height: 300,
        width: 300,
        justifyContent: 'flex-start',
        marginTop: 100,
    },
    name: {
        fontSize: 40,
        fontWeight: 'bold',
    }
});
