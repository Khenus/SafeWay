import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the contact screen</Text>
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
