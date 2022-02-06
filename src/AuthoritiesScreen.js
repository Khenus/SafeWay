import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default function AuthoritiesScreen() {
  return (
    <View style={styles.container}>
      <Text>Calling Authorities Now..</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // Add your own styles here
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
