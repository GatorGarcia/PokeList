import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <Text>Loading</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
