import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export function HelloWave() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/cherry-blossom.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,  // Ajuste o tamanho conforme necessário
    height: 50,
  },
});
