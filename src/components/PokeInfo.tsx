import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const PokeInfo = (props: PokeInfoProps) => {
    const { height, weight, type } = props;

    return (
        <View style={styles.info}>
            <Text testID={'type'}>Type: {type}</Text>
            <Text testID={'height'}>Height: {height}</Text>
            <Text testID={'weight'}>Weight: {weight}</Text>
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
