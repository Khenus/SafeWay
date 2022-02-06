import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

export default function MapScreen() {
  const numFriend = 3;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sharing location</Text>
        <Text>There are {numFriend} trusted persons nearby</Text>
      </View>

      <View>
        <MapView
          initialRegion={{
            latitude: 37.77065,
            longitude: -122.46621,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Add your own styles here
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    display: 'flex',
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  map: {
    display: 'flex',
    flexBasis: '85%',
    borderWidth: 1,
    width: Dimensions.get('window').width - 30,
  },
});
