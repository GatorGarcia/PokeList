import React from 'react';
import { StyleSheet, Text, Pressable, Alert } from 'react-native';
import { TYPE_COLORS } from '../constants';

export const ActionButton = (props: PokeButtonProps) => {
    const { name, move, type } = props;
    const actionString = `${name.toUpperCase()} used ${move.toUpperCase()}`
    const backgroundColor: string = TYPE_COLORS[type];

    return (
        <Pressable style={[styles.button, { backgroundColor: backgroundColor }]} onPress={() => Alert.alert(actionString)}>
            <Text style={styles.buttonText}>Action</Text>
        </Pressable>
    )
}

type PokeButtonProps = {
    name: string,
    move: string,
    type: string
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 130,
        marginBottom: 20
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
