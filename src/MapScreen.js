import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

export default function MapScreen() {
  const numFriend = 3;

  return (
    <View style={styles.container}>
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
  map: {
    width: Dimensions.get('window').width - 10,
    height: Dimensions.get('window').height - 10,
  },
});
