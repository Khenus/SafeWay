import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MapView from 'react-native-maps';

export default function MapScreen() {
  const numFriend = 3;

  return (
    <View>
      <Text>Sharing location</Text>
      <Text>There are {numFriend} nearby</Text>

      {/* <MapView */}
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
