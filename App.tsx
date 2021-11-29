import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { LoadingIndicator } from './src/components/LoadingIndicator';
import { PokeList } from './src/components/PokeList';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return loaded ? <PokeList /> : <LoadingIndicator />;
}
