import React from 'react';
import {StyleSheet} from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Text>This is the home screen</Text>
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
